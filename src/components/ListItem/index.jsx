import React from 'react';
import './ListItem.css';

const ListItem = () => {
  return (
    <div className='item__container'>
      <div className='item__image'>
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" />
      </div>
      <div className='item__data'>
        <p className='item__date'>23rd February, 2023</p>
        <p className='item__heading'>What's new in React 18 ?</p>
        <p className='item__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, saepe id laborum culpa ex corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae nesciunt earum! Animi eveniet fugit est nobis aliquid enim quos reprehenderit? Expedita, temporibus voluptas. Vero omnis illum a doloribus blanditiis, sed, odio nisi nihil, corporis quibusdam fugiat sunt. Obcaecati dignissimos delectus et cupiditate fugiat sunt cum corrupti voluptas omnis molestiae dolorum nostrum possimus id incidunt odit culpa eius quibusdam, beatae odio? Dicta perferendis cumque nam quam natus officiis, corrupti deleniti facilis saepe nisi explicabo qui laboriosam consectetur sint veritatis modi? Adipisci nobis aperiam autem sapiente veniam eveniet repellendus laudantium voluptatem ipsa quisquam repellat, reiciendis saepe exercitationem perferendis inventore iste facere?</p>
      </div>
    </div>
  )
}

export default ListItem