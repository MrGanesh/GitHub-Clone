
        function getData() {
            var sinput = document.querySelector('#getNameForProfile').value;
            var sdata = getProfileData(sinput)
        }

        async function getProfileData(user) {

            var resData = await fetch('https://api.github.com/users/' + user)
            var x = await resData.json();
            console.log(x);
            var divMedia = document.querySelector('#mediaData')
            if(x.length < 1){
                divMedia.innerHTML = '<em> oops! No data found, please retry.'
            }
            else{
                const mdata = `

<div class="card">
    <img class="card-img-top" height="250" width="250" src="${x.avatar_url}" alt="${x.login}">
            <h3 class="card-header bg-info text-white">User Details : ${x.login}</h3>
            <div class="card-body">
                <dl class="row">
                    <dt class="col-6">Login Name : </dt>
                    <dd class="col-6">${x.login}</dd>
                    <dt class="col-6">Id:</dt>
                    <dd class="col-6">${x.id}</dd>
                    <dt class="col-6">Full Name :</dt>
                    <dd class="col-6"> ${x.full_name ? x.full_name : '-'} </dd>
                    <dt class="col-6">Followers</dt>
                    <dd class="col-6">${x.followers  ? x.followers : '-'}</dd>
                    <dt class="col-6">Type : </dt>
                    <dd class="col-6">${x.type  ? x.type : '-' }</dd>
                    <dt class="col-6">Created At : </dt>
                    <dd class="col-6">${x.created_at  ? x.created_at : '-' }</dd>
                    <dt class="col-6">Updated At : </dt>
                    <dd class="col-6">${x.updated_at  ? x.updated_at : '-'}</dd>
                    <dt class="col-6">Default Branch: </dt>
                    <dd class="col-6">${x.default_branch  ? x.default_branch : '-'}</dd>
                    <dt class="col-6">Language:</dt>
                    <dd class="col-6">${x.language  ? x.language : '-'}</dd>
                    <dt class="col-6">Create At:</dt>
                    <dd class="col-6">${x.created_at  ? x.created_at : '-'}</dd>
                    <dt class="col-6">Recent Pushed At : </dt>
                    <dd class="col-6">${x.pushed_at  ? x.pushed_at : '-'} </dd>
                </dl>
            </div>
        </div>

`
            divMedia.innerHTML = mdata

            }         
        }

 
        function getRepoDataOnButton() {
            var sinput = document.querySelector('#userNameByButton').value;
            var sdata = getRepoData(sinput)
        }

        function getRepoDataOnNav() {
            var sinput = document.querySelector('#userNameByNav').value;
            var sdata = getRepoData(sinput)
        }
        async function getRepoData(user) {
            var ressData = await fetch('https://api.github.com/users/' + user + '/repos?user,2,2,true');
            var data = await ressData.json();
            console.log(data)
            var divMedia = document.querySelector('.userDetails')
            if(data.length < 1){
                divMedia.innerHTML = '<em> oops! No data found, please retry.'
            }
            else{
            const media = data.map(x => {
                const mdata = `
            <div class="media">
                    <img class="d-flex mr-3 img-thumbnail align-self-center"
                        src=${x.owner.avatar_url} height="100" width="100">
                    <div class="media-body">
                        <h2 class="mt-0">${x.name} </h2>
                        <p>Id:${x.id} , Full Name : ${x.full_name}, Create At: ${x.created_at}, 
                            Default Branch: ${x.default_branch}, Language: ${x.language}, Recent Pushed At : ${x.pushed_at} </p>
                    </div>
                </div>
            `
                return mdata
            })

            divMedia.innerHTML = media
        }
        }
        function getDataForSearchURL() {
            var input = document.querySelector('#getNameForSearch').value;
            getDataForSearchURLData(input);
        }

        function getDataForSearchURLForNav() {
            var input = document.querySelector('#getNameForNav').value;
            getDataForSearchURLData(input);
        }

        function getDataForSearchURLVert() {
            var input = document.querySelector('#getNameVert').value;
            getDataForSearchURLData(input);
        }

        async function getDataForSearchURLData(user) {
            var resData = await fetch('https://api.github.com/search/users?q=' + user + '&2,2')
            var data = await resData.json();
            console.log(data);
            var divMedia = document.querySelector('.userDetails')
            if(data.length < 1){
                divMedia.innerHTML = '<em> oops! No data found, please retry.'
            }
            else{
            const media = data.items.map(x => {
                const mdata = `
            <div class="media">
                    <img class="d-flex mr-3 img-thumbnail align-self-center"
                        src=${x.avatar_url} height="100" width="100">
                    <div class="media-body">
                        <h2 class="mt-0">${x.login} </h2>
                        <p>Id:${x.id} , Name : ${x.login}, Type:${x.type}, Visit Profile: <a class="cursor-pointer" href="${x.url}">Visit Here </a>, Repos: <a class="cursor-pointer" href="${x.created_at}">Check Here </a>, 
                         Followers: <a class="cursor-pointer" href="${x.followers_url}">Check Here</a>  Organization: <a class="cursor-pointer" href="${x.organizations_url}">Check Here</a></p>
                    </div>
                </div>
            `
                return mdata
            })

            divMedia.innerHTML = media
        }
    }

    
    function getDataForFoll() {
        var input = document.querySelector('#getNameForFoll').value;
        getFollowerData(input)
    }

    async function getFollowerData(user) {
        var resData = await fetch('https://api.github.com/users/' + user + '/followers');
        var data = await resData.json();
        console.log(data);
    
        var divMedia = document.querySelector('.userDetails')
        if(data.length < 1){
            divMedia.innerHTML = '<em> OOPS! No data found, please retry.'
            divMedia.setAttribute('class','afterTemp m-3 ml-4')
        }
        else{
        const media = data.map(x => {
            const mdata = `
        <div class="media">
                <img class="d-flex mr-3 img-thumbnail align-self-center"
                    src=${x.avatar_url} height="100" width="100">
                <div class="media-body">
                    <h2 class="mt-0">${x.login} </h2>
                    <p>Id:${x.id} , Name : ${x.login}, Type:${x.type}, Visit Profile: <a class="cursor-pointer" href="${x.url}">Visit Here </a>, Repos: <a class="cursor-pointer" href="${x.created_at}">Check Here </a>, 
                     Followers: <a class="cursor-pointer" href="${x.followers_url}">Check Here</a>  Organization: <a class="cursor-pointer" href="${x.organizations_url}">Check Here</a></p>
                </div>
            </div>
        `
            return mdata
        })

        divMedia.innerHTML = media

    }

    }
    var feedBackData = [{
        name: 'Ganesh',
        userId : 'MrGanesh',
        feedback: 'GitHub is how people build software. Millions of individuals and organizations around the world use GitHub to discover, share, and contribute to software—from games and experiments to popular frameworks and leading applications., Together, were defining how software is built today!'
    }]
    var namee = '';
    var userId = '';
    var feedback = '';
    function setFeedback(){
        var accord =  document.querySelector('#accordion')
        var getFeedbackData =  JSON.parse(localStorage.getItem("feedBackData"))
        console.log(getFeedbackData.feedback)
        
        const htmlCard = getFeedbackData.map(x =>{
         const accordData = `
         <div class="card">
                      <div class="card-header" role="tab" id="${x.userId}">
                          <h3 class="mb-0">
                              <a data-toggle="collapse" data-target="#${x.userId}-${x.name}">${x.name} <small>${x.userId}</small></a>
                          </h3>
                      </div>
                      <div rol="tabpanel" class="collapse show" id="${x.userId}-${x.name}" data-parent="#accordion">
                          <div class="card-body">
                              <p class="d-none d-sm-block">${x.feedback}</p>
                          </div>
                      </div>
                  </div>
         `
         return accordData
        })
       
        accord.innerHTML = htmlCard
    }

    function addFeedBack(){
           localStorage.setItem("feedBackData", JSON.stringify(feedBackData))
    }

    function getFeedback(){
        setFeedback();
        alert("Thank you for sharing your thoughts, comments, and ideas with us! We read and evaluate all feedback carefully")
        namee = document.querySelector('#firstname').value;
         userId = document.querySelector('#lastname').value;
        feedback = document.querySelector('#feedback').value;
        if(!feedBackData.includes(feedback)){
            feedBackData.push({name: namee,userId : userId, feedback : feedback})
           }
       addFeedBack();
       setFeedback();


    //     console.dir(feedBackData)
    //    var accord =  document.querySelector('#accordion')
    //    const htmlCard = feedBackData.map(x =>{
    //     const accordData = `
    //     <div class="card">
    //                  <div class="card-header" role="tab" id="${x.userId}">
    //                      <h3 class="mb-0">
    //                          <a data-toggle="collapse" data-target="#${x.userId}-${x.name}">${x.name} <small>${x.userId}</small></a>
    //                      </h3>
    //                  </div>
    //                  <div rol="tabpanel" class="collapse show" id="${x.userId}-${x.name}" data-parent="#accordion">
    //                      <div class="card-body">
    //                          <p class="d-none d-sm-block">${x.feedback}</p>
    //                      </div>
    //                  </div>
    //              </div>
    //     `
    //     return accordData
    //    })
      
    //    accord.innerHTML += htmlCard
    }
