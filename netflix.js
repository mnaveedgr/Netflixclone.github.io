document.querySelectorAll(".faqs .faqs-heading-parent .faqs-heading").forEach(questionsbox =>{
    questionsbox.onclick=()=>{
        questionsbox.parentElement.classList.toggle('active');
    }
})