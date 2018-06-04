import './index.css'
import axios from "axios"
//import { createPost } from './posts'
const URL = 'http://localhost:3004/posts';

import { select, selectall, create} from './util'

import { createPost } from './createPost'
let parents = select('#allPosts')
window.onload = function() {

    axios(URL)
        .then(res=>{
            res.data.forEach(postObj => {
                createPost(parents,postObj)
            })
        })
        .catch(err => console.log(err))

    const postObject = {}

    const selectAvatar = select('#postAvatar')
    
    const nameField = select('#nameField')
    nameField.addEventListener('keyup', function(event) {
        if (event.target.value) {
            let avatar = (event.target.value).split(' ').map(avatar => avatar[0]).join('').toUpperCase()
            selectAvatar.innerHTML = avatar
            postObject.username = event.target.value
            postObject.avatar = selectAvatar.innerHTML

        } else {
            selectAvatar.innerHTML = ''
            alert('Please Enter Your Name')
        }
    }) 

    const contentField = select('#contentField')
    contentField.addEventListener('keyup', function(event) {
        if (nameField.value) {  
            postObject.content = event.target.value
        } else {
            alert('Please Enter Your Name First')
            this.value = ''
            nameField.focus()
        }
    })

    const selectFont = select('#selectFont')
    selectFont.addEventListener('change', function(event) {
        postObject.fontFamily = event.target.value
    })

    const selectFontSize = select('#selectFontSize')
    selectFontSize.addEventListener('change', function(event){
        postObject.fontSize = event.target.value
    })
    //background color settings

    let bgColor = "#fff";
    const elems = selectall(".active-bg");
    const ColorOption1 = select('.color-one');
    ColorOption1.onclick = function(){
        bgColor = ColorOption1.getAttribute("data-color");
        postObject.bgColor = bgColor;
    }
    const ColorOption2 = select('.color-two');
    ColorOption2.onclick = function(){
        bgColor = ColorOption2.getAttribute("data-color");
        postObject.bgColor = bgColor;
    }
    const ColorOption3 = select('.color-three');
    ColorOption3.onclick = function(){
        bgColor = ColorOption3.getAttribute("data-color");
        postObject.bgColor = bgColor;
    }
    const ColorOption4 = select('.color-four');
    ColorOption4.onclick = function(){
        bgColor = ColorOption4.getAttribute("data-color");
        postObject.bgColor = bgColor;
    }
    const ColorOption5 = select('.color-five');
    ColorOption5.onclick = function(){
        bgColor = ColorOption5.getAttribute("data-color");
        postObject.bgColor = bgColor;
    }

    const postBtn = select('#postBtn')
    // postBtn.addEventListener('click', e => createPost(postObject))
    postBtn.addEventListener('click', function() {
        nameField.value = ''
        contentField.value = ''
        selectAvatar.innerHTML = ''
        selectFontSize.value = ''
        console.log(postObject);
        axios.post(URL,postObject)
            .then(res =>{
                createPost(parents,postObject)
            })
            .catch(err => console.log(err))
        //parents.appendChild(createPost(postObject))
        //parents.appendChild(createPost(postObject))
       // console.log(postObject);
    })
}


