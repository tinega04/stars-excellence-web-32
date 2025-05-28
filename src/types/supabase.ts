export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          role: 'learner' | 'staff' | 'teacher'
          name: string
          dob: string | null
          county: string | null
          interests: string[] | null
          contact_info: Json | null
          campus: string | null
          class: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          role: 'learner' | 'staff' | 'teacher'
          name: string
          dob?: string | null
          county?: string | null
          interests?: string[] | null
          contact_info?: Json | null
          campus?: string | null
          class?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: 'learner' | 'staff' | 'teacher'
          name?: string
          dob?: string | null
          county?: string | null
          interests?: string[] | null
          contact_info?: Json | null
          campus?: string | null
          class?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      exam_results: {
        Row: {
          id: string
          user_id: string
          term: string
          subject: string
          score: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          term: string
          subject: string
          score: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          term?: string
          subject?: string
          score?: number
          created_at?: string
          updated_at?: string
        }
      }
      fee_statements: {
        Row: {
          id: string
          user_id: string
          term: string
          amount_due: number
          amount_paid: number
          due_date: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          term: string
          amount_due: number
          amount_paid: number
          due_date: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          term?: string
          amount_due?: number
          amount_paid?: number
          due_date?: string
          created_at?: string
          updated_at?: string
        }
      }
      staff_profiles: {
        Row: {
          id: string
          user_id: string
          position: string
          qualifications: Json[]
          subjects: string[]
          schedule: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          position: string
          qualifications: Json[]
          subjects: string[]
          schedule: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          position?: string
          qualifications?: Json[]
          subjects?: string[]
          schedule?: Json
          created_at?: string
          updated_at?: string
        }
      }
      learning_materials: {
        Row: {
          id: string
          teacher_id: string
          subject: string
          class: string
          content_type: 'resource' | 'assignment'
          file_url: string
          description: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          teacher_id: string
          subject: string
          class: string
          content_type: 'resource' | 'assignment'
          file_url: string
          description: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          teacher_id?: string
          subject?: string
          class?: string
          content_type?: 'resource' | 'assignment'
          file_url?: string
          description?: string
          created_at?: string
          updated_at?: string
        }
      }
      classes: {
        Row: {
          id: string
          name: string
          level: string
          teacher_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          level: string
          teacher_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          level?: string
          teacher_id?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 