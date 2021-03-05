export const Post = (postObject) => {
    return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
            <p>posted by ${postObject.name}</p>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <p>Mood: ${postObject.mood}</p>
        <p>${postObject.description}</p>
      </section>
    `
  }