const commentsContainer = document.getElementById('comments-container');

// Function to create a new comment element
function createComment(user, content) {
    const comment = document.createElement('div');
    comment.classList.add('comment');

    comment.innerHTML = `
        <div class="comment-header">
            <span class="comment-user">${user}</span>
            <button class="like-btn">Like</button>
            <button class="unlike-btn">Unlike</button>
            <button class="reply-btn">Reply</button>
        </div>
        <div class="comment-content">
            ${content}
        </div>
        <div class="nested-comments">
            <!-- Nested comments will go here -->
        </div>
    `;

    return comment;
}

// Function to handle the "Reply" button click
function handleReplyClick(commentElement) {
    const nestedCommentsContainer = commentElement.querySelector('.nested-comments');
    
    // Create input fields for the user to enter their name and reply
    const userInput = document.createElement('input');
    userInput.placeholder = 'Your name';
    const replyInput = document.createElement('input');
    replyInput.placeholder = 'Your reply';
    
    // Create a submit button to add the reply
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Reply';

    // Handle the reply submission
    submitButton.addEventListener('click', () => {
        const user = userInput.value;
        const content = replyInput.value;
        
        if (user && content) {
            const newComment = createComment(user, content);
            nestedCommentsContainer.appendChild(newComment);

            // Clear input fields and disable them
            userInput.value = '';
            replyInput.value = '';
            userInput.disabled = true;
            replyInput.disabled = true;
            submitButton.disabled = true;
        }
    });

    // Append input fields and submit button to the comment
    nestedCommentsContainer.appendChild(userInput);
    nestedCommentsContainer.appendChild(replyInput);
    nestedCommentsContainer.appendChild(submitButton);
}

// Function to handle the "Like" button click (No changes from the previous example)
function handleLikeClick(likeBtn) {
    likeBtn.textContent = 'Liked';
    likeBtn.disabled = true;
}

// Function to handle the "Unlike" button click (No changes from the previous example)
function handleUnlikeClick(unlikeBtn) {
    unlikeBtn.textContent = 'Unliked';
    unlikeBtn.disabled = true;
}

// Add event listeners for dynamic elements
commentsContainer.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('reply-btn')) {
        const commentElement = target.closest('.comment');
        handleReplyClick(commentElement);
    } else if (target.classList.contains('like-btn')) {
        handleLikeClick(target);
    } else if (target.classList.contains('unlike-btn')) {
        handleUnlikeClick(target);
    }
});

// Example: Add a root-level comment
const user = 'User1';
const content = 'This is the first comment.';
const rootComment = createComment(user, content);
commentsContainer.appendChild(rootComment);
