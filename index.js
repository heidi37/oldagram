const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const individualPost = document.getElementById('individual-post')
const avatar = document.getElementById('avatar')

for(let i = 0; i < posts.length; i++) {
    console.log(posts[i].avatar)
    individualPost.innerHTML += `
    <section>
        <div class="container image-name-location" id="avatar">
          <img
            class="img-user"
            id="avatar"
            src="${posts[i].avatar}"
            alt="${posts[i].name}"
          />
          <div class="name-location">
            <p class="name">
            ${posts[i].name}<br />
              <span class="location">${posts[i].location}</span>
            </p>
          </div>
        </div>
    </section>
    <section>
        <div class="post">
          <img
            src="${posts[i].post}"
            alt="${posts[i].name}"
          />
        </div>
        <div class="container likes-comments">
          <div class="icons">
            <img
              class="icon-heart"
              src="images/icon-heart.png"
              alt="heart icon"
            />
            <img
              class="icon-comment"
              src="images/icon-comment.png"
              alt="comment icon"
            />
            <img class="icon-dm" src="images/icon-dm.png" alt="dm icon" />
          </div>
          <div class="likes">
            <p>${posts[i].likes} likes</p>
          </div>
          <div class="comments">
            <p>
              <span class="username">${posts[i].username}</span> ${posts[i].comment}
            </p>
          </div>
        </div>
      </section>
    `

}

