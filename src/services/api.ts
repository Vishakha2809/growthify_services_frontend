const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.growthifyservices.in/api";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const contactAPI = {
  // Submit contact form
  submitContact: async (data: ContactFormData) => {
    const response = await fetch(`${API_BASE_URL}/contact/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to submit form");
    }

    return response.json();
  },
};

// Other API calls
export const servicesAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/services/`);
    if (!response.ok) throw new Error("Failed to fetch services");
    return response.json();
  },
};

export const portfolioAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/portfolio/`);
    if (!response.ok) throw new Error("Failed to fetch portfolio");
    return response.json();
  },
};

export const testimonialsAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/testimonials/`);
    if (!response.ok) throw new Error("Failed to fetch testimonials");
    return response.json();
  },
};

export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  location_details?: string;
  job_type: string;
  experience_required: string;
  required_skills: string;
  preferred_skills?: string;
  description: string;
  responsibilities?: string; // Text field from backend
  qualifications?: string; // Text field from backend
  salary_range?: string;
  benefits?: string;
  application_deadline?: string;
  application_email: string;
  external_application_url?: string;
  is_active: boolean;
  is_featured: boolean;
  order: number;

  created_at: string;
  updated_at: string;
}
export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export const jobsAPI = {
  getAll: async (): Promise<PaginatedResponse<Job>> => {
    const response = await fetch(`${API_BASE_URL}/jobs/`);
    if (!response.ok) throw new Error("Failed to fetch jobs");
    return response.json();
  },

  getFeatured: async (): Promise<Job[]> => {
    const response = await fetch(`${API_BASE_URL}/jobs/featured/`);
    if (!response.ok) throw new Error("Failed to fetch featured jobs");
    return response.json();
  },

  getByDepartment: async (department: string): Promise<Job[]> => {
    const response = await fetch(
      `${API_BASE_URL}/jobs/by_department/?department=${encodeURIComponent(department)}`,
    );
    if (!response.ok) throw new Error("Failed to fetch jobs by department");
    return response.json();
  },
};

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url?: string;
  category: string;
  category_display: string;
  tags?: string;
  tags_list: string[];
  author_name: string;
  author_bio?: string;
  read_time: string;
  views_count: number;
  is_featured: boolean;
  is_published: boolean;
  published_date: string;
  updated_date: string;
}

export const blogAPI = {
  // Get all blog posts
  getAll: async (): Promise<PaginatedResponse<BlogPost>> => {
    const response = await fetch(`${API_BASE_URL}/blog/`);
    if (!response.ok) throw new Error("Failed to fetch blog posts");
    return response.json();
  },

  // Get featured posts
  getFeatured: async (): Promise<BlogPost[]> => {
    const response = await fetch(`${API_BASE_URL}/blog/featured/`);
    if (!response.ok) throw new Error("Failed to fetch featured posts");
    return response.json();
  },

  // Get posts by category
  getByCategory: async (category: string): Promise<BlogPost[]> => {
    const response = await fetch(
      `${API_BASE_URL}/blog/by_category/?category=${encodeURIComponent(category)}`,
    );
    if (!response.ok) throw new Error("Failed to fetch posts by category");
    return response.json();
  },

  // Get single post by slug
  getBySlug: async (slug: string): Promise<BlogPost> => {
    const response = await fetch(`${API_BASE_URL}/blog/${slug}/`);
    if (!response.ok) throw new Error("Failed to fetch blog post");
    return response.json();
  },

  // Increment view count
  incrementView: async (slug: string): Promise<void> => {
    await fetch(`${API_BASE_URL}/blog/${slug}/increment_view/`, {
      method: "POST",
    });
  },
};
