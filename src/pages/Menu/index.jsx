import { Card } from "../../components/Cards";
import { Header } from "../../components/Header";
import { Container } from "./styled";
import { Footer } from '../../components/Footer'

import ravanello from '../../img/saladaRavanello.png'
import masktwo from '../../img/Mask group-1.png'

import imgtemp1 from '../../img/pngegg (6) 1.png'
import imgtemp2 from '../../img/pngegg (8) 1.png'
import imgtemp3 from '../../img/pngegg (7) 1.png'
import imgtemp4 from '../../img/pngegg (4).png'




export function MenuOne(){
    return(
        <Container>
            <Header/>
            <div className="header">
            { <img src={ravanello} width={500} height={500} />  }
             <Card title='Salada Ravanello >' p='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim' temp={<img src={imgtemp1}/>} tempone={<img src={imgtemp2}/>} temptwo={<img src={imgtemp3}/>}  cash='R$ 49,97' tempfor={<img src={imgtemp4}/>} value='1'/>
             </div>
            <Footer/>
        </Container>
    )
};

export function MenuTwo(){
    return(
        <Container>
        <Header/>
        <div className="header">
        { <img src={masktwo} width={500} height={500} />  }
         <Card title='Torradas de Parma >' p='Presunto de parma e rúcula em um pão com fermentação natural' temp={<img src={imgtemp1}/>} tempone={<img src={imgtemp2}/>} temptwo={<img src={imgtemp3}/>}  cash='R$ 25,97' tempfor={<img src={imgtemp4}/>} value='1'/>
         </div>
        <Footer/>
    </Container>
    )
};