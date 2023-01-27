document.addEventListener('DOMContentLoaded', () => add_content());

function add_content() {

    document.querySelector('#header').innerHTML = `
        <img src="arngolo.jpg" alt="my pic" width="100px" height="100px">
        <h1 class="navbar-brand">Armstrong Ngolo (arngolo)</h1>
    `;

    document.querySelector('#navy').innerHTML = `
        <div>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="navbar-brand" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="navbar-brand" href="education.html">Education</a>
                </li>
                <li class="nav-item">
                    <a class="navbar-brand" href="projects.html">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="navbar-brand" href="publications.html">Publications</a>
                </li>
                <li class="nav-item">
                    <a class="navbar-brand" href="github.html">github</a>
                </li>
                <li class="nav-item">
                    <a class="navbar-brand" href="hobbies.html">Hobbies</a>
                </li>
            </ul>
        </div>
    `;

    document.querySelector('footer').innerHTML = `
    <div style="text-align:center">
        <a href="https://orcid.org/0000-0002-9737-2307"><img alt="ORCID logo" src="orcid_icon.png" width="16" height="16" /></a>
        <a href="https://www.linkedin.com/in/armstrong-ngolo-3161a6103/"><span class="iconify" data-icon="bi:linkedin"></span></a>
    </div>
    `
}