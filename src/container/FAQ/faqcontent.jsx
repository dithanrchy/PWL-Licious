import React from 'react';
import './faq.css';

const FaqContent = (props) => {
    return(
        <div>
            <div class="faq1">
                <div class="FAQ">
                    <p class="h4baru"> {props.que} </p>
                    <div class="faqcontent">
                        <div class="faqcontent1">
                        <p class="isifaq"> {props.ans} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqContent;