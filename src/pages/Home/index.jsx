import { Container, Content, Items, Section, BoxA, ContentBoxA } from "./styled";

//components

import { Card } from "../../components/Cards";
import { Header } from "../../components/Header";
//end components
//img
import masktwo from '../../img/Mask group-1.png'
import ravanello from '../../img/saladaRavanello.png'
import torrada from '../../img/Mask group-2.png'
import molla from '../../img/Mask group-3.png' 
import imgsob1 from '../../img/Mask group-4.png'
import imgsob2 from '../../img/Mask group-5.png'
import imgsob3 from '../../img/Mask group-6.png'
import imgsob4 from '../../img/Mask group-7.png'
import imgbeb5 from '../../img/Mask group-8.png'
import imgbeb6 from '../../img/Mask group-9.png'
import imgbeb7 from '../../img/Mask group-10.png'
import imgbeb8 from '../../img/Mask group-11.png'
//end img

//carousel
import Carousel from 'react-elastic-carousel'
import {useState} from 'react'
import { Footer } from "../../components/Footer";
import { BsJustify } from "react-icons/bs";
import { TranslateImg } from "../../components/TranslateImg";
//end

export function Home(){
        const breakPoints =[
            {width: 1, itemShow: 1},
            {width: 550, itemShow:2, itemScroll:4},
            {width: 768, itemShow:3},
        ]

        const [items, setIems] = useState ([1, 2 ])

        const addItem = () =>{
            const nexItem = Math.max(4, items.length + 4)
            setIems([...items, nexItem])
        }
        
        const removeItem = ()=>{
            const endRange = Math.max(0, items.lengh -1)
            setIems(items.slice(0, endRange))
        }



    return(
        <Container>
            <Header/>
               
            <Section>
                <BoxA>
                    <TranslateImg/>
                        <ContentBoxA>
                            
                        </ContentBoxA>
                </BoxA>
            </Section>

            <Content>
                <h1>Pratos principais</h1>
                <Carousel isRTL breakPoints={breakPoints} >

                    {items.map((item) => (
                    
                    <Items key={items} >
                        
                        { <Card title='Salada Molla  >' img={ <img src={molla}/>} p='Tomates, coentro, pepino, cebola roxa Frescos e temperados' cash='R$ 19,97'value='1'/>} 
                        
                         { <Card title='Spaguetti Gambe  >' img={ <img src={torrada}/>} p='Massa fresca com camarões e pesto batata lorem lorem' cash='R$ 79,97'value='1'/>} 

                         { <Card title='Torradas de Parma >' img={ <img src={masktwo}/>} p='Presunto de parma e rúcula em um pão com fermentação natural' cash='R$ 25,97'value='1'/>}   
            
                         { <Card title='Salada Ravanello >' img={ <img src={ravanello}/>} p='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim' cash='R$ 49,97'value='1'/>}      
                         
                         
                    </Items>
                    )) }
                </Carousel>

                </Content>

                <Content>
                <h1>Sobremesas</h1>
                <Carousel isRTL breakPoints={breakPoints} >

                    {items.map((item) => (
                    
                    <Items key={items} >
                        
                         { <Card title='Prugna Pie >' img={ <img src={imgsob1}/>} p='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim' cash='R$ 49,97'value='1'/>}  

                         { <Card title='Peachy pastrie >' img={ <img src={imgsob2}/>} p='Delicioso folheado de pêssego com folhas de hortelã' cash='R$ 32,97'value='1'/>} 

                         { <Card title='Macarons  >' img={ <img src={imgsob3}/>} p='Farinha de amêndoas, manteiga, claaras e açúcar' cash='R$ 79,97'value='1'/>}   
                         { <Card title='Bolo de damasco >' img={ <img src={imgsob4}/>} p='Damascos frescos em uma massa sem glúten' cash='R$ 19,97'value='1'/>}      
                         
                    </Items>
                    )) }
                </Carousel>

                </Content>

                <Content>
                <h1>Bebidas</h1>
                <Carousel isRTL breakPoints={breakPoints} >

                    {items.map((item) => (
                    
                    <Items key={items} >
                        
                         { <Card title='Suco de maracujá >' img={ <img src={imgbeb5}/>} p='Suco de maracujá gelado, cremoso, docinho' cash='R$ 49,97'value='1'/>}  

                         { <Card title='Espresso >' img={ <img src={imgbeb6}/>} p='Café cremoso feito na temperatura e pressões perfeitas' cash='R$ 32,97'value='1'/>} 

                         { <Card title=' Tè d&apos; autotunno >' img={ <img src={imgbeb7}/>} p='Chá de anis, canela e limão, sinta o outono italiano' cash='R$ 79,97'value='1'/>}   

                         { <Card title='Bolo de damasco >' img={ <img src={imgbeb8}/>} p='Damascos frescos em uma massa sem glúten' cash='R$ 19,97'value='1'/>}      
                         
                    </Items>
                    )) }
                </Carousel>

                </Content>
                
                <Footer/>

        </Container>
    )
}