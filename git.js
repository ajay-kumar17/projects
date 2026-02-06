async function searchUser() {
  const username = document.getElementById("username").value;
  const container = document.getElementById("profile-container");
  if (!username) {
    alert("Fill Username!");
    return;
  }
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if (data.message === "Not Found") {
      container.style.display = "block";
      container.innerHTML = "<p>User Not Found!</p>";
    } else {
      container.style.display = "block";
      container.innerHTML = `
            <img src="${data.avatar_url}" alt="avatar">
            <h2>${data.name || data.login}</h2>
            <p>${data.bio || "No bio available"}</P>
            <p><strong>Follower:</strong>${data.followers}|<strong>Following</strong>${data.following}</p>
            <p><strong>Public Repos:</strong> ${data.public_repos}</p>
            <a href="${data.html_url}" target="_blank">View GitHub Profile</a>`;
    }
  } catch (error) {
    console.error("Error fatching data:", error);
    alert("Something went wrong");
  }
}
