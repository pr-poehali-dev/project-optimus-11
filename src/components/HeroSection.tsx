import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/33df3bf2-2d5a-43d6-bf40-046fef802e6a/files/a7a19ad7-6931-4104-a4d8-d36eb6dc10bf.jpg',
  'https://cdn.poehali.dev/projects/33df3bf2-2d5a-43d6-bf40-046fef802e6a/bucket/7046f6d5-1f98-456e-bac7-af6d1422ddd1.png',
  'https://cdn.poehali.dev/projects/33df3bf2-2d5a-43d6-bf40-046fef802e6a/bucket/5548375d-95e7-46ee-bb67-52d9ed66be6d.png',
  'https://cdn.poehali.dev/projects/33df3bf2-2d5a-43d6-bf40-046fef802e6a/bucket/78f06d42-9613-4372-829d-5541184d3860.png',
  'https://cdn.poehali.dev/projects/33df3bf2-2d5a-43d6-bf40-046fef802e6a/bucket/0a832594-de11-4c57-989a-fb77aced0114.png',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-12">
            {/* Portrait */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-2xl md:h-64 md:w-64">
                <img
                  src="https://cdn.poehali.dev/projects/33df3bf2-2d5a-43d6-bf40-046fef802e6a/bucket/c2e8128d-9d5a-4f7c-9282-87ec5cd97bee.JPG"
                  alt="Личное фото"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-4">
                <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                  Попов Алексей
                </p>
                <p className="text-xl font-light text-white/80 md:text-2xl">
                  Врач-рентгенолог | Преподаватель
                </p>
                <div className="flex gap-6 pt-4">
                  <a
                    href="https://vk.com/radiologyart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                    aria-label="VKontakte"
                  >
                    <svg
                      className="h-7 w-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.043-2.763-5.32-2.763-5.788 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.18-3.625 2.18-3.625.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                    </svg>
                  </a>
                  <a
                    href="https://max.ru/join/W_9gST8pFWDy8yplJ8sC9WUF9XuQU6ttrbjtzG5mkG4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                    aria-label="Max"
                  >
                    <svg
                      className="h-7 w-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.26 14.4l-2.95-.924c-.641-.2-.654-.641.136-.953l11.527-4.448c.537-.194 1.006.131.589.173z" />
                    </svg>
                  </a>
                  <a
                    href="https://dzen.ru/id/6625fe9426b0b07859221c96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                    aria-label="Дзен"
                  >
                    <svg
                      className="h-7 w-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M11.996 0C5.372 0 0 5.372 0 11.996 0 18.628 5.372 24 11.996 24 18.628 24 24 18.628 24 11.996 24 5.372 18.628 0 11.996 0zM12.5 12.5c-.34 3.576-1.195 6.433-2.5 8.5-1.305-2.067-2.16-4.924-2.5-8.5C11.076 12.16 13.933 11.305 16 10c-2.067 1.305-3.5 2.5-3.5 2.5zm-.5-.5S10.805 10.695 9.5 8.628C11.567 7.323 14.424 6.468 18 6.128c-.34 3.576-1.195 6.433-2.5 8.5-1.305-2.067-3.5-2.628-3.5-2.628zM12 11.5S10.695 13.195 8.628 14.5C7.323 12.433 6.468 9.576 6.128 6c3.576.34 6.433 1.195 8.5 2.5-2.067 1.305-2.628 3-2.628 3zm.5.5c.34-3.576 1.195-6.433 2.5-8.5 1.305 2.067 2.16 4.924 2.5 8.5-3.576-.34-6.433-1.195-8.5-2.5 2.067-1.305 3.5-2.5 3.5-2.5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}