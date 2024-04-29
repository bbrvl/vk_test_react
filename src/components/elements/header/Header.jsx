import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './Header.scss'


export const Header = () => {
    const images = [
        'https://thumbs.dfs.ivi.ru/storage4/contents/9/1/9f6710587d7e729f0c30342c7fcf4a.jpg/858x483/?q=85', // Лёд 3
        'https://thumbs.dfs.ivi.ru/storage30/contents/e/8/0fdb12df48b73795d09dca0e18b963.jpg/858x483/?q=85', // Мастер и Маргарита
        'https://thumbs.dfs.ivi.ru/storage9/contents/4/c/f3342d1aaec11b757b040382cd16a2.jpg/858x483/?q=85', // Папины дочки
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div className='header' style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <div className='header-block'>
                        <h3 className='header-block_name'>Лёд 3</h3>

                        <p className='header-block_title'>Надя выросла и стала фигуристкой. Она мечтает о «Кубке Льда», 
                            как когда-то мечтала ее мама. Горин возражает против спортивной карьеры дочери — он 
                            оберегает ее от любых трудностей и его можно понять: он потерял слишком много. На 
                            тайной тренировке Надя знакомится с молодым и дерзким хоккеистом из Москвы, и 
                            между ними вспыхивает первая любовь. Отец не верит в искренность чувств юноши и разлучает пару.
                        </p>

                        <button className='header-block_button' type="button">Смотреть</button> 
                    </div>
                       
                </div>
            </div>

            <div className="each-slide-effect">
                <div className='header' style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <div className='header-block'>
                        <h3 className='header-block_name'>Мастер и Маргарита</h3>

                        <p className='header-block_title'>Москва, 1930-е годы. Популярный драматург обвиняется в антисоветчине: 
                            спектакль по его пьесе отменяют, а самого его выгоняют из союза литераторов. 
                            В не самый лучший момент своей жизни он встречает глубоко несчастную в браке 
                            красавицу Маргариту и начинает новый роман, героями которого становятся люди 
                            из его окружения, в том числе — мистический персонаж Воланд, списанный со 
                            знакомого иностранца.
                        </p>

                        <button className='header-block_button' type="button">Смотреть</button>
                    </div>
                </div>
            </div>

            <div className="each-slide-effect">
                <div className='header' style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <div className='header-block'>
                        <h3 className='header-block_name'>Новые папины дочки</h3>

                        <p className='header-block_title'>Проклятие Васнецовых настигает уже повзрослевших дочерей 
                            семейного психотерапевта. В канун очередной годовщины свадьбы из дома сбегает Даша, 
                            оставив трудоголику Венику прощальное письмо, обручальное кольцо и четырёх дочерей. 
                            Теперь Вениамин, совсем как его тесть когда-то, вынужден стать для своих детей и 
                            папой, и мамой, и другом. А поможет ему в этом неунывающее семейство Васнецовых.
                        </p>

                        <button className='header-block_button' type="button">Смотреть</button>
                    </div>  
                </div>
            </div>
        </Slide>
    )
}
