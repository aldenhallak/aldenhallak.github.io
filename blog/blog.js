// Blog functionality
document.addEventListener('DOMContentLoaded', function() {
    loadBlogPosts();
});

// Blog posts data - in a real application, this would come from a CMS or API
const blogPosts = [
    {
        id: 1,
        title: "DrawAFish.com Postmortem — Aug 3, 2025 Incident",
        displayTitle: "DrawAFish.com Postmortem",
        date: "2025-08-04",
        excerpt: "A blameful postmortem of how my viral HackerNews project got compromised by legacy passwords, missing auth, and the perils of vibe coding. \"Perils\" doesn't really work there, but that's what Copilot suggested.",
        filename: "draw-a-fish-postmortem",
        thumbnail: "images/drawafish-hero.jpg"
    }
];

function loadBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    if (!blogPostsContainer) return;

    // Sort posts by date (newest first)
    const sortedPosts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    blogPostsContainer.innerHTML = sortedPosts.map(post => `
        <article class="blog-post-preview">
            ${post.thumbnail ? `
                <div class="post-thumbnail">
                    <a href="posts/${post.filename}.html">
                        <img src="${post.thumbnail}" alt="${post.displayTitle || post.title}" />
                    </a>
                </div>
            ` : ''}
            <div class="post-preview-content">
                <h2 class="post-title">
                    <a href="posts/${post.filename}.html">${post.displayTitle || post.title}</a>
                </h2>
                <div class="post-meta">
                    ${formatDate(post.date)}
                </div>
                <div class="post-excerpt">
                    ${post.excerpt}
                </div>
                <a href="posts/${post.filename}.html" class="read-more">Read more →</a>
            </div>
        </article>
    `).join('');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Function to get blog post by filename (useful for individual post pages)
function getBlogPost(filename) {
    return blogPosts.find(post => post.filename === filename);
}
