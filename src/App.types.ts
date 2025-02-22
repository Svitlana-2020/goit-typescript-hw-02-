export interface Photo {
    id: string;
    urls: {
      full: string;
      small: string;
    };
    alt_description: string;
  }
  
  export interface ApiResponse {
    total: number;
    total_pages?: number;
    results: Photo[];
  }

  export interface SearchBarProps {
    onSearch: (title: string) => void;
  }

  export interface LoadMoreBtnProps {
    onClick: () => void; 
  }

  export interface ImageGalleryProps {
    photos: Photo[];
    onImageClick: (data:ImageData) => void;
  }

  export interface ImageCardProps {
    id: string;
    full: string;
    small: string;
    alt_description: string;
    onImageClick: (data: ImageData) => void;
  }

  export interface ImageData {
    id?: string;
    urls: {
      full: string;
    };
    alt_description: string;
  }