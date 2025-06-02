import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// Zod schema for form validation
const formSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  // Password validation: simple presence check. For production, more complex rules are typical.
  password: z.string().min(1, { message: "Password is required." }), 
});

// Props interface for LoginForm component
interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  // State for loading status during form submission
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // Initialize react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Handler for form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log("Attempting login with:", values);
    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    // In a real application, replace this with actual authentication logic
    alert(`Login submitted for user: ${values.username}. Check console for details.`);
    setIsLoading(false);
    // form.reset(); // Optionally reset form on successful login or clear password field
  }

  // Handler for sign up link click
  const handleSignUpClick = React.useCallback(() => {
    // In a real application, this would navigate to a sign-up page or open a sign-up modal
    console.log("Sign Up link clicked");
    alert("Redirecting to Sign Up page (not implemented in this demo).");
  }, []);

  return (
    <Card className={cn(
      "w-full max-w-md bg-card p-8 rounded-lg shadow-md", // Adheres to Layout Requirements: mainContent styling
      className
    )}>
      <CardHeader className="p-0 mb-6"> {/* Removed default CardHeader padding; added margin-bottom for spacing */} 
        <CardTitle className="text-3xl font-bold text-card-foreground text-left">
          Log in
        </CardTitle>
      </CardHeader>
      {/* 
        CardContent styling: Adheres to Layout Requirements: mainContent.container "gap-5".
        Using space-y-5 for vertical spacing between form group and sign-up link.
        Padding is removed (p-0) as the parent Card component already provides p-8 overall padding.
      */}
      <CardContent className="p-0 space-y-5">
        <Form {...form}>
          {/* Form elements are spaced using space-y-5 to match the container's gap requirement */}
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-card-foreground">Username</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Username" // Placeholder text as per image
                      {...field} 
                      disabled={isLoading}
                      className="text-card-foreground placeholder:text-muted-foreground" // Ensures text color and placeholder color according to theme
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-card-foreground">Password</FormLabel>
                  <FormControl>
                    <Input 
                      type="password" 
                      placeholder="Password" // Placeholder text as per image
                      {...field} 
                      disabled={isLoading}
                      className="text-card-foreground placeholder:text-muted-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold py-2.5" // Custom height/padding if needed, py-2.5 for ~h-10 equivalent
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Log in'}
            </Button>
          </form>
        </Form>
        <p className="text-sm text-center text-muted-foreground pt-1"> {/* pt-1 for slight visual adjustment of spacing */}
          or,{' '} {/* Text content as per image */}
          <Button 
            variant="link" 
            className="p-0 h-auto text-sm text-primary hover:underline" // Styling for link-like appearance
            onClick={handleSignUpClick}
            disabled={isLoading}
            type="button" // Ensures this button doesn't submit the form
          >
            sign up {/* Text content as per image */}
          </Button>
        </p>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
