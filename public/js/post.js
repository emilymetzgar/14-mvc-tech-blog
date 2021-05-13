const postComment = async (event) => {
  event.preventDefault();

  //takes values from form based on user input
  const comment = document.querySelector('#comment').value.trim();
  const postId = document.querySelector("#post").value;

  if (comment.length > 0) {
    const response = await fetch('/api/post/' + postId + "/comment", {
      method: 'POST',
      body: JSON.stringify({
        comment
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (response.ok) {
      document.location.replace('/post/' + postId);
    } else {
      alert(response.statusText);
    }
  }
};

const updatePost = async (event) => {
  event.preventDefault();

  //takes values from form based on user input
  const name = document.querySelector('#name').value.trim();
  const description = document.querySelector('#description').value.trim();
  const postId = document.querySelector("#post").value;

  if (name && description && postId) {
    const response = await fetch(`/api/post/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({
        name,
        description
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (response.ok) {
      document.location.replace('/post/' + postId);
    } else {
      alert(response.statusText);
    }
  }
};

const deletePost = async (event) => {
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
  .addEventListener('submit', postComment);

document
  .querySelector(".update")
  .addEventListener("submit", updatePost);


const deleteButtonContainer = document.querySelector('.delete');
if(deleteButtonContainer){
  deleteButtonContainer.addEventListener('click', deletePost);
}
  