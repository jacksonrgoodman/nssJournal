export const Post = (postObject) => {
    return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
            <p>posted by ${postObject.userId} on ${postObject.timestamp}</p>
        </header>
        <img class="post__image" src="/src/images/${postObject.image}"/>
        <p>Mood: ${postObject.mood}</p>
        <p>${postObject.text}</p>
      </section>
    `
  }