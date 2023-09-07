import React from 'react'
import Header from '../../header/header'
import Footer from '../../Footer/Footer'
import Newpost from '../LayoutCour/NewPost'
import './DocItem.css'
import '../LayoutCour/courItem.css'
import image1 from '../../../asset/image/Doccument/image1.png'
import Cplusplus from '../../../asset/image/CourseItem/c++.jpg'
import Python from '../../../asset/image/CourseItem/python.png'
import Javascript from '../../../asset/image/CourseItem/courjs.png'
import Hd1 from '../../../asset/image/CourseItem/hd1.jpg'
import Hd2 from '../../../asset/image/CourseItem/hd2.jpg'
import Hd3 from '../../../asset/image/CourseItem/hd5.jpg'
import {FaCalendarAlt,FaChartBar,FaFacebook, FaTwitter, FaWhatsapp, FaPinterest} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function DocumentItem() {
  const blog = {
    title: "Learn JavaScript while Playing Games — Gamify Your Learning",
    time: " 25/03/2023",
    view: 361,
    name1: "CheckiO",
    image1,
  }
  const cardCour = [
    {
      id: 1,
      image: Cplusplus,
      name: 'Khóa học C++'
    },
    {
      id: 2,
      image: Python,
      name: 'Khóa học Python'
    },
    {
      id: 3,
      image: Javascript,
      name: 'Khóa học Javascript'
    }
  ]
  const cardActive = [
    {
      id: 1,
      image: Hd2,
      name: 'Chương trình tri ân các anh hùng dân tộc' 
    },
    {
      id: 2,
      image: Hd3,
      name: 'Lễ bế giảng và trao bằng tốt nghiệp'
    },
    {
      id: 3,
      image: Hd1,
      name: 'Nhóm lập trình Website'
    }
  ]
  return (
    <div>
        <Header />
        <div className='containerDoc'>
            <div className='mainDoc'>
                <h2>{blog.title}</h2>
                <div className='navDoc'>
                    <div className='nav-left'>
                      <div className='nav-time'><FaCalendarAlt/> Ngày đăng: {blog.time}</div>
                      <div className='nav-views'><FaChartBar/> Lượt xem: {blog.view}</div>
                    </div>
                    <div className='nav-right'>
                      <div className="fab">
                        <FaFacebook size={25} />
                      </div>
                      <div className="fab">
                        <FaTwitter size={25} />
                      </div>
                      <div className="fab">
                        <FaWhatsapp size={25}/>
                      </div>
                      <div className="fab">
                        <FaPinterest size={25}/>
                      </div>
                      </div>
                </div>
                <span>Trong bài viết này, tôi muốn giới thiệu các trang web khác nhau mà bạn có thể sử dụng để học JavaScript khi chơi trò chơi. Phương pháp này được gọi là game hóa và là một kỹ thuật nổi tiếng hiện nay.

                Giới thiệu:

                Thông thường, nếu bạn học một công nghệ hoặc ngôn ngữ mới, bạn có thể không giữ được động lực của mình. Điều này là do số lượng công nghệ dường như vô tận. Có thể khó tiếp tục gắn bó với công nghệ đặc biệt phức tạp và việc học bị bế tắc.

                Gamification là một giải pháp tốt cho vấn đề này. Nó sử dụng một nỗ lực chiến lược đơn giản để thúc đẩy và thu hút người dùng trong khi tìm hiểu điều gì đó mới. Đó là một kỹ thuật thêm các yếu tố thiết kế điển hình từ các trò chơi để nâng cao quá trình học tập. Điều này được thực hiện bằng cách thúc đẩy mong muốn tự nhiên của mọi người về giao tiếp xã hội, học tập, làm chủ, cạnh tranh, thành tích, địa vị hoặc thể hiện bản thân. Việc triển khai sớm Gamification sử dụng một hệ thống phần thưởng đơn giản cho người chơi sau khi họ hoàn thành nhiệm vụ để thu hút họ. Phần thưởng bao gồm điểm số, huy hiệu thành tích hoặc tiền ảo để sử dụng.</span>
                <h4>{blog.name1}</h4>
                <span>CheckiO là một trang web dạy lập trình bằng cách cung cấp một thế giới trò chơi trực tuyến với nhiều tính năng Gamification như tính điểm, bảng xếp hạng hoặc xã hội hóa. Nó giúp bạn cải thiện kỹ năng mã hóa của mình. Ngoài ra, nó chứa nhiều trò chơi mã hóa cho người mới bắt đầu và lập trình viên nâng cao. Bạn có thể hoàn thành các bài tập bằng Python hoặc TypeScript bao gồm nhiều chủ đề khác nhau, bao gồm chuỗi, vòng lặp, đối tượng, lớp, ngoại lệ và giải quyết vấn đề. Sau khi hoàn thành các thử thách, bạn sẽ kiếm được điểm, mở khóa các trò chơi mới và thăng cấp lên các cấp độ cao hơn. Hơn nữa, có một phần bình luận và Diễn đàn nơi bạn có thể tham khảo trợ giúp hoặc xem cách những người dùng khác giải câu đố.</span>
                <img src={blog.image1} alt='error'></img>
                <div className='view-add'>
                    <Link className='btn-link' to={`https://khoacntt.uneti.edu.vn/public/storage/uploads/files/Chuonggtrinhdaotao/Tai%20lieu%20TTCB%207_8_2019%20final.pdf?fbclid=IwAR11tgBaMAJ2PsgmZEO-qUXU2VvcT3vGl2bawfc95OWuONTZmK86t1vrRBM`}>
                        Xem thêm... 
                    </Link>
                </div>
            </div>
            <div className='sliderDoc'>
              <Newpost item={cardCour} text='KHÓA HỌC LIÊN QUAN' circle={false}/>
              <Newpost item={cardActive} text='BÀI VIẾT MỚI NHẤT' circle={true}/>
              <Newpost item={cardActive} text='BÀI VIẾT MỚI NHẤT' circle={true}/>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default DocumentItem