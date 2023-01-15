import "./Mostpopular.css"
import { Card, SectionWrapper, SectionHeader, MostPopItems } from '../index'
import popular_01 from '../../assets/images/popular-01.jpg'
import popular_02 from '../../assets/images/popular-02.jpg'
import popular_03 from '../../assets/images/popular-03.jpg'
import popular_04 from '../../assets/images/popular-04.jpg'




const Mostpopular = () => {

  const datas = [
    { id: "most-pop-1", image: popular_01, title: 'fortnite', catagory: "Sandbox", rate: "3.8", download: "2.3m" },
    { id: "most-pop-2", image: popular_02, title: 'pubg', catagory: "streamx", rate: "4.8", download: "1.1m" },
    { id: "most-pop-3", image: popular_03, title: 'mario', catagory: "legandary", rate: "5", download: "900k" },
    { id: "most-pop-4", image: popular_04, title: 'spiderman', catagory: "battle s", rate: "4.3", download: "1.4m" },
    { id: "most-pop-5", image: popular_01, title: 'fortnite', catagory: "Sandbox", rate: "3.8", download: "2.3m" },
    { id: "most-pop-6", image: popular_04, title: 'spiderman', catagory: "battle s", rate: "4.3", download: "1.4m" },
    { id: "most-pop-7", image: popular_02, title: 'pubg', catagory: "streamx", rate: "4.8", download: "1.1m" },
    { id: "most-pop-8", image: popular_03, title: 'mario', catagory: "legandary", rate: "5", download: "900k" }
  ]

  const data = datas.map(card => {
    return <Card key={card.id} image={card.image} title={card.title} catagory={card.catagory} rate={card.rate} download={card.download} />;
  })

  return (
    <>
      <SectionWrapper>
        <SectionHeader>Most Popular</SectionHeader>
        <MostPopItems>
          {data}


        </MostPopItems>

      </SectionWrapper>
    </>
  )
}

export default Mostpopular