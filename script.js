document.addEventListener('DOMContentLoaded',
      function () {
            const faqItems = document.querySelectorAll('.faq_item');

            faqItems.forEach(item => {
                  const question = item.querySelector('.ques_container');
                  const answer = item.querySelector('.ans_container');

                  question.addEventListener('click', () => {
                        const isVisible = answer.style.display === 'block';
                        answer.style.display = isVisible ? 'none' : 'block';

                        const icon = question.querySelector('.faq_icon');
                        if (answer.style.display == 'block') {
                              icon.innerText = "close";
                        }
                        else {
                              icon.innerText = "add";
                        }
                  })
            })
      })