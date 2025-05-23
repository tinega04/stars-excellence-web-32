
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const DashboardSection = ({ title, description, children }: DashboardSectionProps) => {
  return (
    <Card className="mb-8 border-accentBlue/20 shadow-sm">
      <CardHeader className="bg-accentBlue/5 border-b border-accentBlue/20">
        <CardTitle className="text-lg text-darkBlue">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="pt-6">
        {children}
      </CardContent>
    </Card>
  );
};

export default DashboardSection;
