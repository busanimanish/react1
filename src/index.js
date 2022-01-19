import React from 'react'
import ReactDOM from 'react-dom'
const books=[
  {
    id:1,
    img:'https://images-eu.ssl-images-amazon.com/images/G/31/wireless_products/katariy/jan_art_biggest_offers_this_season/xcm_banners_janart_2022_wireless_oneplus_nordce_434x641_in-en.jpg',
  author:"ONE PLUS",
  title:"This is one plus nord C"
},
{
  id:2,
    img:'https://images-eu.ssl-images-amazon.com/images/G/31/wireless_products/katariy/jan_art_biggest_offers_this_season/xcm_banners_janart_2022_wireless_oneplus_nordce_434x641_in-en.jpg',
  author:"ONE PLUServerver",
  title:"This is one plus nord C"
},
{
  id:3,
    img:'https://images-eu.ssl-images-amazon.com/images/G/31/wireless_products/katariy/jan_art_biggest_offers_this_season/xcm_banners_janart_2022_wireless_oneplus_nordce_434x641_in-en.jpg',
  author:"ONE PLUSekfwefnef",
  title:"This is one plus nord C"
}
];
function BookList(){
  return (
    <section>
     {books.map((book)=>{
       return <Book key={book.id} {...book}></Book>
     })}
    
    </section>
    
  );
}
const clickHandler=()=>{
  alert('hello world');
}
const Book=(props)=>{
  console.log(props);
  const {img,title,author}=props;
  return (
  <article>
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type='button' onClick={clickHandler}>refernce example</button>
  </article>
  );
};


ReactDOM.render(<BookList/>,document.getElementById('root'));