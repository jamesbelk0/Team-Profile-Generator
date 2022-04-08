// engineer Card
const engineerCard = (profile) => `
<div class="">
    <div class="card-header">
        <p class="h3">${profile.getName()}</p>
        <p class="h4">
            ${profile.getRole()}
        </p>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">
                ${profile.getID()}
            </li>
            <li class="list-group-item">
                ${profile.getEmail()}
            </li>
            <li class="list-group-item">
                ${profile.getGithub()}
            </li>
        </ul>
    </div>
</div>
`;

module.exports = engineerCard;