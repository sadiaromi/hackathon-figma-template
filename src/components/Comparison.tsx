export default function ComparisonTable() {
    const specifications = {
      general: {
        title: "General",
        items: [
          { label: "Sales Package", value1: "1 sectional sofa", value2: "1 Three Seater, 2 Single Seater" },
          { label: "Model Number", value1: "TFCBCRLR6SMS", value2: "DTUBDPN5568" },
          { label: "Secondary Material", value1: "Solid Wood", value2: "Solid Wood" },
          { label: "Configuration", value1: "L-shaped", value2: "L-shaped" },
          { label: "Upholstery Material", value1: "Fabric + Cotton", value2: "Fabric + Cotton" },
          { label: "Upholstery Color", value1: "Bright Grey & Lion", value2: "Bright Grey & Lion" },
        ]
      },
      product: {
        title: "Product",
        items: [
          { label: "Filling Material", value1: "Foam", value2: "Matte" },
          { label: "Finish Type", value1: "Bright Grey & Lion", value2: "Bright Grey & Lion" },
          { label: "Adjustable Headrest", value1: "No", value2: "Yes" },
          { label: "Maximum Load Capacity", value1: "280 KG", value2: "300 KG" },
          { label: "Origin of Manufacture", value1: "India", value2: "India" },
        ]
      },
      dimensions: {
        title: "Dimensions",
        items: [
          { label: "Width", value1: "265.32 cm", value2: "265.32 cm" },
          { label: "Height", value1: "76 cm", value2: "76 cm" },
          { label: "Depth", value1: "167.76 cm", value2: "167.76 cm" },
          { label: "Weight", value1: "45 KG", value2: "65 KG" },
          { label: "Seat Height", value1: "41.52 cm", value2: "41.52 cm" },
          { label: "Leg Height", value1: "5.46 cm", value2: "5.46 cm" },
        ]
      },
      warranty: {
        title: "Warranty",
        items: [
          { label: "Warranty Summary", value1: "1 Year Manufacturing Warranty", value2: "1.2 Year Manufacturing Warranty" },
          { label: "Warranty Service Type", value1: "For Warranty Claims or Any Product related issues Please Email at operations@trevifurniture.com", value2: "For Warranty Claims or Any Product related issues Please Email at support@xyz.com" },
          { label: "Covered in Warranty", value1: "Warranty Against Manufacturing Defect", value2: "Warranty of the product is limited to manufacturing defects only" },
          { label: "Not Covered in Warranty", value1: "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.", value2: "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage." },
          { label: "Domestic Warranty", value1: "1 Year", value2: "3 Months" },
        ]
      }
    }
  
    return (
      <div className="mt-6 sm:mt-8 -mx-4 sm:mx-0">
        <div className="overflow-x-auto pb-4 sm:pb-0">
          <div className="mb-6 sm:mb-8">
            {Object.entries(specifications).map(([key, section]) => (
              <div key={key} className="mb-6 sm:mb-8">
                <h2 className="px-4 sm:px-0 mb-3 sm:mb-4 text-xl sm:text-2xl font-bold">{section.title}</h2>
                <div className="min-w-[768px]">
                  <table className="w-full border-collapse bg-[#FFFFFF] border-t border-r border-b">
                    <tbody>
                      {section.items.map((item, index) => (
                        <tr key={index}>
                          <td className="border-l px-4 py-3 w-1/3 text-sm sm:text-base font-medium">{item.label}</td>
                          <td className="px-4 py-3 w-1/3 text-sm sm:text-base">{item.value1}</td>
                          <td className="border-r px-4 py-3 w-1/3 text-sm sm:text-base">{item.value2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        )
  }