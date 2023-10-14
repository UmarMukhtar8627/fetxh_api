document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("data-container");

    // Replace the URL with your proxy server endpoint
    fetch("http://localhost:5501/api/posts") // Use the correct endpoint defined by your proxy server
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            // Process and display the data
            const posts = data;

            if (posts.length === 0) {
                postsContainer.innerHTML = "<p>No posts found.</p>";
            } else {
                posts.forEach((post) => {
                    const postElement = document.createElement("div");
                    postElement.className = "post";

                    // Create an image element for the post thumbnail
                    const image = document.createElement("img");
                    image.src = post.jetpack_featured_media_url;
                    image.alt = post.title.rendered;
                    postElement.appendChild(image);

                    // Create a heading for the post title
                    const title = document.createElement("h2");
                    title.textContent = post.title.rendered;
                    postElement.appendChild(title);

                    // Create a "See More" button for each post
                    const seeMoreButton = document.createElement("button");
                    seeMoreButton.textContent = "See More";
                    seeMoreButton.classList.add("see-more-button");
                    seeMoreButton.addEventListener("click", () => {
                        // Redirect to the new page with full post details
                        window.location.href = `next.html?post_id=${post.id}`;
                    });
                    postElement.appendChild(seeMoreButton);

                    postsContainer.appendChild(postElement);
                });
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            postsContainer.innerHTML = "<p>An error occurred while fetching data.</p>";
        });
});
