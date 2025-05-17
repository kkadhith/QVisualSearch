import { Input, Card, CardBody, Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  
  const images = [
    "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9",
    "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9",
    "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9",
    "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9",
    "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9",
    "https://images.unsplash.com/photo-1743976955434-ddf46ed0d998",
    "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9",
    "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9",
    "https://images.unsplash.com/photo-1743976955434-ddf46ed0d998",
    "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9",
    "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9",
    "https://images.unsplash.com/photo-1743976955434-ddf46ed0d998",
    "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9",
    "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9",
    "https://images.unsplash.com/photo-1743976955434-ddf46ed0d998",
    "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9",
    "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9",
    "https://images.unsplash.com/photo-1743976955434-ddf46ed0d998",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Typography variant="h3" color="blue-gray" className="font-bold">
                QVisualSearch
              </Typography>
            </div>

            <Button 
              onClick={() => navigate('/upload')}
              className="flex items-center gap-2"
            >
              Upload</Button>


          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <Input
            label="Search images"
            className="w-full"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {images.map((image, index) => (
              <div key={index}>
                <Card className="overflow-hidden">
                  <CardBody className="p-0">
                    <img
                      src={image}
                      className="w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </CardBody>
                </Card>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}