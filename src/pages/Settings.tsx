import { useState } from "react";
import { Settings as SettingsIcon, User, Bell, Shield, Palette, Database, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [weeklyReports, setWeeklyReports] = useState(true);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your application preferences and configurations</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile Information
              </CardTitle>
              <CardDescription>
                Update your account profile information and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Admin" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="User" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="admin@srevents.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Tell us a little about yourself..."
                  defaultValue="Super Administrator at SR Events & Portraits"
                />
              </div>
              
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Configure how you receive notifications and alerts.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Email Notifications</Label>
                  <div className="text-sm text-muted-foreground">
                    Receive email alerts for important updates
                  </div>
                </div>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Push Notifications</Label>
                  <div className="text-sm text-muted-foreground">
                    Get push notifications on your device
                  </div>
                </div>
                <Switch
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Weekly Reports</Label>
                  <div className="text-sm text-muted-foreground">
                    Receive weekly performance reports
                  </div>
                </div>
                <Switch
                  checked={weeklyReports}
                  onCheckedChange={setWeeklyReports}
                />
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Email Preferences</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="newOrders" defaultChecked />
                    <label htmlFor="newOrders" className="text-sm">New order notifications</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="vendorUpdates" defaultChecked />
                    <label htmlFor="vendorUpdates" className="text-sm">Vendor application updates</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="systemAlerts" defaultChecked />
                    <label htmlFor="systemAlerts" className="text-sm">System maintenance alerts</label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Manage your account security and authentication.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Change Password</h4>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>
                <Button>Update Password</Button>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Two-Factor Authentication</h4>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm">Enable 2FA</div>
                    <div className="text-xs text-muted-foreground">
                      Add an extra layer of security to your account
                    </div>
                  </div>
                  <Button variant="outline">Setup 2FA</Button>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Active Sessions</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="text-sm font-medium">Current Session</div>
                      <div className="text-xs text-muted-foreground">Chrome on Windows • New York, US</div>
                    </div>
                    <div className="text-xs text-green-600">Active now</div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="text-sm font-medium">Mobile App</div>
                      <div className="text-xs text-muted-foreground">iOS App • 2 hours ago</div>
                    </div>
                    <Button variant="outline" size="sm">Revoke</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Appearance
              </CardTitle>
              <CardDescription>
                Customize the look and feel of your dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Theme</Label>
                  <div className="text-sm text-muted-foreground">
                    Switch between light and dark mode
                  </div>
                </div>
                <ThemeToggle />
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Dashboard Layout</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 cursor-pointer hover:bg-accent">
                    <div className="text-sm font-medium">Compact</div>
                    <div className="text-xs text-muted-foreground">Dense layout with smaller cards</div>
                  </div>
                  <div className="border rounded-lg p-4 cursor-pointer hover:bg-accent bg-primary/5 border-primary">
                    <div className="text-sm font-medium">Comfortable</div>
                    <div className="text-xs text-muted-foreground">Default spacing and sizing</div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Sidebar</h4>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="collapseSidebar" />
                  <label htmlFor="collapseSidebar" className="text-sm">Auto-collapse sidebar on mobile</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="sidebarIcons" defaultChecked />
                  <label htmlFor="sidebarIcons" className="text-sm">Show sidebar icons</label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                System Configuration
              </CardTitle>
              <CardDescription>
                Manage system-wide settings and configurations.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Business Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input id="businessName" defaultValue="SR Events & Portraits" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessPhone">Business Phone</Label>
                    <Input id="businessPhone" defaultValue="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessEmail">Business Email</Label>
                    <Input id="businessEmail" type="email" defaultValue="contact@srevents.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessWebsite">Website</Label>
                    <Input id="businessWebsite" defaultValue="www.srevents.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessAddress">Business Address</Label>
                  <Textarea 
                    id="businessAddress" 
                    defaultValue="123 Photography Lane, Creative District, NY 10001"
                  />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Email Configuration</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="smtpHost">SMTP Host</Label>
                    <Input id="smtpHost" defaultValue="smtp.gmail.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtpPort">SMTP Port</Label>
                    <Input id="smtpPort" defaultValue="587" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtpUser">SMTP Username</Label>
                    <Input id="smtpUser" defaultValue="noreply@srevents.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtpPassword">SMTP Password</Label>
                    <Input id="smtpPassword" type="password" placeholder="••••••••" />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium">System Maintenance</h4>
                <div className="flex gap-4">
                  <Button variant="outline">
                    <Database className="w-4 h-4 mr-2" />
                    Backup Database
                  </Button>
                  <Button variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Test Email Configuration
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}