document.addEventListener('DOMContentLoaded', () => {
    const articleTitle = document.getElementById('article-title');
    const articleContent = document.getElementById('article-content');
    const facebookShareButton = document.getElementById('facebook-share');
    const twitterShareButton = document.getElementById('twitter-share');
    const telegramShareButton = document.getElementById('telegram-share');
    const threadsShareButton = document.getElementById('threads-share');
  
    // Function to load and display a specific article
    function loadArticle() {
      const urlParams = new URLSearchParams(window.location.search);
      const articleId = urlParams.get('post_id');
  
      fetch(`/api/posts/${articleId}`)
        .then((response) => {
            console.log("res",response)
          if (!response.ok) {
            throw new Error(`Network response was not ok (status: ${response.status})`);
          }
          return response.json();
        })
        .then((article) => {
          articleTitle.textContent = article.title;
          articleContent.textContent = article.content;
        })
        .catch((error) => {
          console.error('Error fetching article data:', error);
          articleTitle.textContent = 'Error fetching article';
        });
    }
  
    loadArticle();
  
    // Add click event listeners for sharing buttons
    facebookShareButton.addEventListener('click', () => {
      // Implement Facebook sharing logic
    });
  
    twitterShareButton.addEventListener('click', () => {
      // Implement Twitter sharing logic
    });
  
    telegramShareButton.addEventListener('click', () => {
      // Implement Telegram sharing logic
    });
  
    threadsShareButton.addEventListener('click', () => {
      // Implement Threads sharing logic
    });
  });
  