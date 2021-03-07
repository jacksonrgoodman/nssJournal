export const Post = (postObject) => {
    return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
            <p>posted by ${postObject.userId} on ${postObject.timestamp}</p>
            <img class="post__image" src="${postObject.image}"/>
            <p>Mood: ${postObject.mood}</p>
            <p>${postObject.text}</p>
        </header>
      </section>
    `
  }