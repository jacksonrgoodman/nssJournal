export const Entry = (postObject) => {
    return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
            <p>posted by ${postObject.userId} on ${postObject.timestamp}</p>
            <p>Mood: ${postObject.mood}</p>
            <p>${postObject.text}</p>
        </header>
      </section>
    `
  }
  