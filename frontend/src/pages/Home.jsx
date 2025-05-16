import { Input, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";

export function Home() {


  const images = [
    "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9",
    "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9",
    "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9",
    "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9",
    "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9",
    "https://images.unsplash.com/photo-1743976955434-ddf46ed0d998",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto mb-8">
        <Input
          label="Search"
        />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Card key={index} className="overflow-hidden">
            <CardBody className="p-0">
              <img
                src={image}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}