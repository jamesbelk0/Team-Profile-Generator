// Manager Card
const managerCard = (profile) => `
<div class="card m-3 shadow" style="width: 250px">
    <div class="card-header bg-success text-white">
        <p class="h3">${profile.getName()}</p>
        <p class="h4">
            ${profile.getRole()}
        </p>
    </div>
    <div class="card-body bg-dark">
        <ul class="list-group">
            <li class="list-group-item">
            <span class="font-weight-bold">ID</span>
                ${profile.getId()}
            </li>
            <li class="list-group-item">
            <span class="font-weight-bold">Email</span>
               <a href="mailto:${profile.getEmail()}">${profile.getEmail()}</a>
            </li>
            <li class="list-group-item">
            <span class="font-weight-bold">Office:</span>
                ${profile.getOffice()}
            </li>
        </ul>
    </div>
</div>
`;

module.exports = managerCard;