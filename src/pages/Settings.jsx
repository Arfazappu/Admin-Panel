import { useState } from "react"
import Card from "../components/common/Card"
import Button from "../components/common/Button"
import logo from "../assets/logo.png"

function Settings() {
  const [formData, setFormData] = useState({
    appName: "Free Shops",
    tags: "#shopping #free #freeshoppingapp",
    phone: "+141-298 142 234",
    email: "freeshopsapp@gmail.com",
    currency: "disable",
    paymentGateways: false,
    pushNotification: {
      headline: "",
      subHeadline: "",
      description: "",
    },
    privacyPolicy: "",
    termsConditions: "",
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (name.includes(".")) {
      const [parent, child] = name.split(".")
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      })
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="space-y-6">
      <div className="text-white">
        <h1 className="text-xl font-medium">Configure app settings and integrations</h1>
      </div>

      <form onSubmit={handleSubmit}>
        {/* General Settings */}
        <Card className="mb-6">
          <h2 className="text-lg font-medium p-4 border-b">General Settings</h2>

          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">App Logo</label>
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 border rounded-md overflow-hidden">
                  <img src={logo} alt="App Logo" className="w-full h-full object-contain" />
                </div>
                <Button variant="outline" size="sm">
                  Change Logo
                </Button>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">App Name</label>
              <input
                type="text"
                name="appName"
                value={formData.appName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Contact</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">&nbsp;</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Currency */}
        <Card className="mb-6">
          <h2 className="text-lg font-medium p-4 border-b">Currency</h2>

          <div className="p-4">
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="enable"
                  name="currency"
                  value="enable"
                  checked={formData.currency === "enable"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="enable">Enable</label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="disable"
                  name="currency"
                  value="disable"
                  checked={formData.currency === "disable"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="disable">Disable</label>
              </div>
            </div>
          </div>
        </Card>

        {/* Payment Gateways */}
        <Card className="mb-6">
          <h2 className="text-lg font-medium p-4 border-b">enable/disable payment gateways</h2>

          <div className="p-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="paymentGateways"
                checked={formData.paymentGateways}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
            </label>
          </div>
        </Card>

        {/* Push Notification */}
        <Card className="mb-6">
          <h2 className="text-lg font-medium p-4 border-b">Push Notification</h2>

          <div className="p-4 space-y-4">
            <div>
              <input
                type="text"
                name="pushNotification.headline"
                value={formData.pushNotification.headline}
                onChange={handleChange}
                placeholder="Headline"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            <div>
              <input
                type="text"
                name="pushNotification.subHeadline"
                value={formData.pushNotification.subHeadline}
                onChange={handleChange}
                placeholder="Sub headline"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            <div>
              <input
                type="text"
                name="pushNotification.description"
                value={formData.pushNotification.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            <div className="border border-dashed border-gray-300 rounded-md p-10 flex items-center justify-center">
              <Button variant="outline" size="sm">
                Upload Banner
              </Button>
            </div>
          </div>
        </Card>

        {/* Privacy Policy */}
        <Card className="mb-6">
          <h2 className="text-lg font-medium p-4 border-b">Privacy Policy/Terms:</h2>

          <div className="p-4">
            <textarea
              name="privacyPolicy"
              value={formData.privacyPolicy}
              onChange={handleChange}
              placeholder="Write Privacy Police description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 min-h-[100px]"
            ></textarea>
          </div>
        </Card>

        {/* Terms & Conditions */}
        <Card className="mb-6">
          <h2 className="text-lg font-medium p-4 border-b">Terms & Conditions</h2>

          <div className="p-4">
            <textarea
              name="termsConditions"
              value={formData.termsConditions}
              onChange={handleChange}
              placeholder="Write Terms & Condition description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 min-h-[100px]"
            ></textarea>
          </div>
        </Card>

        <div className="flex justify-center">
          <Button type="submit">Save all changes</Button>
        </div>
      </form>
    </div>
  )
}

export default Settings

