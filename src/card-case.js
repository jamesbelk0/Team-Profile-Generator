// Primary Container for Cards
const profileCase = (cards) => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiles</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
    </head>

    <!-- Body -->
    <body class ="pb-5">

    <!-- Header -->
        <header class="bg-info py-3 mb-5" >
            <h1 class="text-center text-white">
                Team Profile
            </h1>
        </header>
        
        <!-- Team Member Cards -->
        <main>
            <div class="container">
                <div class="row d-flex justify-content-center align-items-center">
                    ${cards}
                </div>
            </div>
        </main>
    </body>
</html>
`;

module.exports = profileCase;