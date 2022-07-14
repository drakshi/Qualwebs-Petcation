type feature = {
  id: number;
  service_id: number;
  feature: string;
};

interface IService {
  id: number;
  name: string;
  description: string;
  icon: string;
  status: number;
  sitter_service_id: number;
  created_at: string;
  updated_at: string;
  is_active: 0 | 1;
  features: feature[];
}

export default IService;
