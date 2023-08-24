import  './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor
                <div className="singlePostEdit">
                     <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>    
                </div>
            </h1>
            <div className="singlePostInfo">
                <span>
                    Author:<b className='singlePostAuthor'>Prasuk Jain</b>
                </span>
                <span>1 day ago</span>
                
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ducimus distinctio eos ea soluta veritatis minus aspernatur provident fugit repellat architecto omnis quia doloremque dolores veniam, enim, tempore necessitatibus incidunt?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ducimus distinctio eos ea soluta veritatis minus aspernatur provident fugit repellat architecto omnis quia doloremque dolores veniam, enim, tempore necessitatibus incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ducimus distinctio eos ea soluta veritatis minus aspernatur provident fugit repellat architecto omnis quia doloremque dolores veniam, enim, tempore necessitatibus incidunt?
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
                Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
                eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
                odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
            </p>
        </div>
    </div>
  )
}
