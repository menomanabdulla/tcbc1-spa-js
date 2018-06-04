import { create } from './util'

import axios from "axios";

export let createPost = (parents,postObj) =>{
    let col = create({class: 'col-md-6 offset-md-3 mt-3'});
    let card = create({class: "card mt-3"});
    let cardBody = create({class: "card-body"});

    let postTop = createPostTop(postObj);
    cardBody.appendChild(postTop);

    let hr = create("hr");
    cardBody.appendChild(hr);

    let postBody = createPostBody(postObj);
    cardBody.appendChild(postBody);

    cardBody.appendChild(hr);

    //let postComment = createPostComment(postObj);
    //cardBody.appendChild(postComment);

    card.appendChild(cardBody);
    col.appendChild(card);

    parents.appendChild(col)
    return parents
}

function createPostTop(postObj){
    let postTop = create({ class: "d-flex align-items-center" });
    let postAvatar = create({class:'post-avatar sm'})
    postAvatar.innerHTML = postObj.avatar

    postTop.appendChild(postAvatar)

    let userInfoInPost = create({class:"userInfoInPost"})

    let userInfoInPostp1 = create("p",{
        class: "medium-para",
        id: "dynamicPostUser"
    });
    userInfoInPostp1.innerHTML = postObj.username 
    userInfoInPost.appendChild(userInfoInPostp1)

    let userInfoInPostp2 = create("p",{
        class: "small-para",
        id: "dynamicPostTime"
    })

    //userInfoInPostp2.innerHTML = new Date(postObj.createdTime).toISOString();
    //userInfoInPost.appendChild(userInfoInPostp2)

    postTop.appendChild(userInfoInPost);
    return postTop
}

function createPostBody(postObj){
    let postBody = create({class: "post-body"})
    let postContent = create("p",{class:"text-justify"})
    console.log(postObj.content)
    postContent.innerHTML = postObj.content

    postContent.style.fontFamily = postObj.fontFamily
    postContent.style.fontSize = postObj.fontSize+'px'
    postBody.appendChild(postContent)
    postBody.style.backgroundColor = postObj.bgColor
    console.log(postBody);
    return postBody
}