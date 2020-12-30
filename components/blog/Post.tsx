import { Post as IPost } from 'interfaces/blogProps';

const Post: React.FC<IPost> = ({ fields }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
            <img
                className="w-full"
                src="https://source.unsplash.com/random/1600x900/"
                alt="Sunset in the mountains"
            ></img>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{fields.title}</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                </p>
                {/* {fields.content.content.map(element => {
                element.content.map(detail => {
                  return(
                    <p className="text-gray-700 text-base">{detail.value}</p>
                  );
                })
              })
            } */}
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #winter
                </span>
            </div>
        </div>
    );
};

export default Post;