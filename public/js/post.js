const postCommentHandler = async (event) => {
  event.preventDefault();

  // Collect values from the form
  const comment = document.querySelector('#comment').value.trim();
  const postId = document.querySelector("#post").value;
  
  if (comment.length > 0) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/post/'+postId+"/comment", {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the post page
      document.location.replace('/post/'+postId);
    } else {
      alert(response.statusText);
    }
  }
};

const updatePostHandler = async (event) => {
  event.preventDefault();

  // Collect values from the form
  const name = document.querySelector('#name').value.trim();
  const description = document.querySelector('#description').value.trim();
  const postId = document.querySelector("#post").value;
  
  if (name && description && postId) {
    // Send a PUT request to the API endpoint
    const response = await fetch(`/api/post/${postId}`, {
    method: 'PUT',
      body: JSON.stringify({ name, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the post page
      document.location.replace('/post/'+postId);
      alert("Post Updated");
    } else {
      alert(response.statusText);
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
  
    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/userProfile');
      alert("Post Deleted");
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.post-comment')
  .addEventListener('submit', postCommentHandler);

document
  .querySelector(".update-post-form")
  .addEventListener("submit", updatePostHandler);

document
  .querySelector('.delete-post')
  .addEventListener('click', delButtonHandler);