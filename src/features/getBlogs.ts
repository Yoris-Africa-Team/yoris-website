import { v4 as uuidv4 } from 'uuid'; // Import for random UUID generation

// Define the Blog type
interface Blog {
  images: { id: string; image: string }[];
  direction?: 'forward' | 'backward';
  speed?: number;
}

export const getBlogs = (boxDeck: number): Blog[] => {
  const imageURLs = [
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?k=6&m=1185953092&s=612x612&w=0&h=SNiShskOfwQ7Sys5TX0eb5eBxHobktWUfZGrox5LMyk=",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  ];

  const images = imageURLs.map((image) => ({
    id: uuidv4(),
    image,
  }));

  const blogs: Blog[] = new Array(boxDeck).fill(null).map(() => ({ images }));

  const directionArray = ['forward', 'backward'];

  blogs.forEach((blog, index) => {
    if (index < 6) {
      if (index % 2 === 0) {
        blog.direction = 'backward';
        blog.speed = 70000 + (index + 1) * 1200;
      } else {
        blog.direction = 'forward';
        blog.speed = 75000 + (index + 1) * 1200;
      }
    } else {
      blog.speed = 60000;
      blog.direction = directionArray[Math.floor(Math.random() * directionArray.length)];
    }
  });

  return blogs;
};
