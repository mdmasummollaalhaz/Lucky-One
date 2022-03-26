import React from 'react';
import './Faq.css'
const Faq = () => {
    return (
        <div className='faq' id='faq'>
            <h2>FAQ</h2>
            <div className='faqSection'>
                <h4>How react works?</h4>
                <p>React একটি জাভাস্ক্রিপ্ট library। এটি মূলত single page application এবং mobile apps এর user interface বানাতে সাহায্য করে। React works in declearative code। declearative code বলতে মনে করো তুমি একটি রেস্টুরেন্ট এ গিয়ে ওয়েটার কে বললে তুমি কি খেতে চাও। কিন্তু তুমি রান্নাঘরে গিয়ে রাঁধুনি বলবে না যে কিভাবে রান্না করতে হবে। React এ আমরা মূলত components create করে কাজ করি। প্রত্যেক components এর মধ্যে html এর মতো jSX লিখে থাকি। প্রত্যেক components এর মধ্যে props এর মাধ্যমে useState থেকে data রিছিভ করা হয়। আর বাইরের থেকে ডটা লোড করতে হলে useEffect ব্যবহার করতে হয়।</p>
            </div>
            <div className='faqSection mt-2'>
                <h4>Props vs State difference</h4>
                <div class="list-group">
                    <p class="list-group-item list-group-item-action list-group-item-primary">Props are read only.</p>
                    <p class="list-group-item list-group-item-action list-group-item-danger">State changes can be asynchronous.</p>

                    <p class="list-group-item list-group-item-action list-group-item-primary">Props are immutable</p>
                    <p class="list-group-item list-group-item-action list-group-item-danger">State is mutable.</p>

                    <p class="list-group-item list-group-item-action list-group-item-primary">Props can be accessed by the child component</p>
                    <p class="list-group-item list-group-item-action list-group-item-danger">State cannot be accessed by child components</p>

                    <p class="list-group-item list-group-item-action list-group-item-primary">Props make components reusable</p>
                    <p class="list-group-item list-group-item-action list-group-item-danger">State cannot make components reusable</p>

                    <p class="list-group-item list-group-item-action list-group-item-primary">Stateless component can have Props.</p>
                    <p class="list-group-item list-group-item-action list-group-item-danger">Stateless components cannot have State.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Faq;