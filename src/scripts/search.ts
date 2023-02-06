interface resultInterface {
    title: string,
    url: string,
    description?: string,
    tags: Array<string>,
  }
  import Fuse from 'fuse.js'

  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    ignoreLocation: true,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: ["title", "description"]
  };

  const posts = await fetch("../search.json").then(resp => resp.json());
  const fuse = new Fuse(posts, options);
  const inputBox = document.querySelector<HTMLInputElement>('#searchBox');

  inputBox.addEventListener('input', () => {
    const pattern = inputBox.value;
    const results: Fuse.FuseResult<resultInterface>[] = fuse.search(pattern);
    let html = "";
    for (const result of results) {
      html += (`
      <div class="card w-96 bg-base-100 shadow-[0px_0px_5px_3px_rgb(0_0_0_/_50%)] dark:shadow-[0px_0px_5px_3px_rgb(255_255_255_/_50%)]">
        <div class="card-body">
          <h2 class="card-title">${result.item.title}</h2>
          ${result.item.description ? `<p>${result.item.description}</p>` : ''}
          
          <div class="card-actions justify-end">
            ${result.item.tags.map(tag => `<div class="badge badge-outline">${tag}</div>`).join('')}
          </div>
          <div class="card-actions justify-end">
            <a href="${result.item.url}" class="btn btn-primary animation-none" style="animation: none;">Read more</a>
          </div>
        </div>
      </div>
      `);
    }
    document.querySelector('#results').innerHTML = html;
  })