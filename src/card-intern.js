// Intern Card
const internCard = (profile) => `
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
                ${profile.getSchool()}
            </li>
        </ul>
    </div>
</div>
`;

module.exports = internCard;