
async function getAllUsers() {
    try {
        let main = document.querySelector('.all-users')
        let response = await fetch('/api_all_user')
        let result = await response.json()
        console.log(result)

        let render = () => {
            let randomList = []
            // console.log(randomNum)
            
            while (randomList.length < result.length) {
                let randomNum = Math.floor(result.length * Math.random())
                if (!randomList.includes(randomNum)) {
                    randomList.push(randomNum)
                }
            }
            console.log(randomList)
            for (let index of randomList) {
                // console.log(result[index].ProfileBg)
                let item = result[index]
                main.innerHTML +=
                    `<div class="profile">
                        <div class="user">
                            <div class="bg">
                                <img src="${item.ProfileBg}" alt="image">
                            </div>
                            <img src="${item.Profile}" alt="" class="profileImg">
                            <div class="user-info">
                                <div class="fullname">
                                    <h1>${item.Name}</h1>
                                    <h2>${item.Surname}</h2>
                                </div>
                                <p>${item.Job}</p>
                                <div class="social">
                                    <a href="${item.Facebook}">
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="${item.GitHub}">
                                        <i class="fa-brands fa-github"></i>
                                    </a>
                                    <a href="${item.Twitter}">
                                        <i class="fa-solid fa-folder-open"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
            }
        }
        render()

    } catch (error) {
        console.error(error)
    }
}

getAllUsers()