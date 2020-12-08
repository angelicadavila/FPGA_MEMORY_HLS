var areaJSON='{"columns":["", "ALUTs", "FFs", "RAMs", "DSPs", "MLABs", "Details"], "debug_enabled":"true", "type":"module", "total_percent":[1.74374, 1.0623, 0.772071, 1.66496, 0], "total":[14670, 21702, 114, 0, 13], "name":"Kernel System", "max_resources":[1405440, 2810880, 6847, 3960, 70272], "children":[{"name":"Static Partition", "type":"partition", "children":[{"name":"Board interface", "type":"resource", "data":[13132, 20030, 112, 0, 0], "details":[{"type":"text", "text":"Platform interface logic."}]}]}, {"name":"System description ROM", "type":"resource", "data":[2, 71, 2, 0, 0], "details":[{"type":"text", "text":"This read-only memory contains information for the host about the system and about each kernel in the system, including kernel names, arguments, and attributes. The system description ROM ensures that the binary image on the FPGA is compatible with the host program."}, {"type":"brief", "text":"Contains information for the host."}]}, {"name":"exm1", "compute_units":1, "type":"function", "total_percent":[0.170251, 0.127789, 0.0569573, 0, 0], "total_kernel_resources":[1536, 1601, 0, 0, 13], "details":[{"type":"text", "text":"Number of compute units: 1"}, {"type":"text", "text":"Kernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality."}, {"type":"brief", "text":"1 compute unit.\\nKernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality."}], "children":[{"name":"Function overhead", "type":"resource", "data":[1463, 1467, 0, 0, 6], "details":[{"type":"text", "text":"Kernel dispatch logic."}, {"type":"brief", "text":"Kernel dispatch logic."}]}, {"name":"exm1.B0", "type":"basicblock", "children":[{"name":"Cluster logic", "type":"resource", "data":[72, 134, 0, 0, 7], "details":[{"type":"brief", "text":"Logic required to efficiently support sets of operations that do not stall"}, {"type":"text", "text":"Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."}]}, {"name":"Computation", "type":"resource", "children":[{"name":"ImgSobel4K_MX.cl:20", "type":"resource", "data":[1, 0, 0, 0, 0], "debug":[[{"filename":"ImgSobel4K_MX.cl", "line":20}]], "children":[{"name":"\'ImgSobelFunc\' HDL Function Call", "type":"resource", "count":1, "data":[1, 0, 0, 0, 0]}], "replace_name":"true"}]}]}]}]}';
var area_srcJSON='{"children":[{"children":[{"data":[13132,20030,112,0,0],"details":[{"text":"Platform interface logic.","type":"text"}],"name":"Board interface","type":"resource"}],"name":"Static Partition","type":"partition"},{"data":[2,71,2,0,0],"details":[{"text":"This read-only memory contains information for the host about the system and about each kernel in the system, including kernel names, arguments, and attributes. The system description ROM ensures that the binary image on the FPGA is compatible with the host program.","type":"text"},{"text":"Contains information for the host.","type":"brief"}],"name":"System description ROM","type":"resource"},{"children":[{"data":[72,134,0,0,7],"details":[{"text":"Feedback+Cluster logic","type":"brief"}],"name":"Data control overhead","type":"resource"},{"data":[1463,1467,0,0,6],"details":[{"text":"Kernel dispatch logic.","type":"text"},{"text":"Kernel dispatch logic.","type":"brief"}],"name":"Function overhead","type":"resource"},{"children":[{"count":1,"data":[1,0,0,0,0],"debug":[[{"filename":"ImgSobel4K_MX.cl","line":20}]],"name":"\'ImgSobelFunc\' HDL Function Call","type":"resource"}],"data":[1,0,0,0,0],"debug":[[{"filename":"ImgSobel4K_MX.cl","line":20}]],"name":"ImgSobel4K_MX.cl:20","replace_name":"true","type":"resource"}],"compute_units":1,"data":[1536,1601,0,0,13],"details":[{"text":"Number of compute units: 1","type":"text"},{"text":"Kernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality.","type":"text"},{"text":"1 compute unit.\\nKernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality.","type":"brief"}],"name":"exm1","total_kernel_resources":[1536,1601,0,0,13],"total_percent":[0.170251,0.127789,0.0569573,0,0],"type":"function"}],"columns":["","ALUTs","FFs","RAMs","DSPs","MLABs","Details"],"data":[1538,1672,2,0,13],"debug_enabled":"true","max_resources":[1405440,2810880,6847,3960,70272],"name":"Kernel System","total":[14670,21702,114,0,13],"total_percent":[1.74374,1.0623,0.772071,1.66496,0],"type":"module"}';
var mavJSON='{"nodes":[{"type":"kernel", "id":2, "name":"exm1", "children":[{"type":"bb", "id":3, "name":"exm1.B0", "children":[{"type":"inst", "id":4, "name":"\'ImgSobelFunc\' HDL Function Call", "debug":[[{"filename":"ImgSobel4K_MX.cl", "line":20}]]}, {"type":"inst", "id":5, "name":"\'ImgSobelFunc\' HDL Function Call", "debug":[[{"filename":"ImgSobel4K_MX.cl", "line":20}]]}, {"type":"inst", "id":6, "name":"Begin", "details":[{"type":"table", "Start Cycle":"0", "Latency":"1"}]}, {"type":"inst", "id":7, "name":"End", "details":[{"type":"table", "Start Cycle":"9", "Latency":"1"}]}], "details":[{"type":"table", "Latency":"9"}]}]}], "links":[]}';
var loopsJSON='{"columns":["", "Pipelined", "II", "Speculated iterations", "Details"], "children":[{"name":"Kernel: exm1", "data":["", "", ""], "debug":[[{"filename":"ImgSobel4K_MX.cl", "line":17}]], "details":[{"type":"brief", "text":"Single work-item execution"}, {"type":"text", "text":"Single work-item execution"}, {"type":"text", "text":"Fmax bottlenck block: None"}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Kernels", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#ipp1476408832230"}]}]}]}';
var fmax_iiJSON='{"basicblocks":{"exm1.B0":{"name":"exm1.B0", "target_fmax":"Not specified", "target_ii":"Not specified", "achieved_fmax":"480.0", "achieved_ii":1, "latency":9, "max_interleaving":1, "is_fmax_bottleneck":"No", "is_loop_header":"No", "is_single_block_loop":"No", "loop_layer":0, "loop_location":{}}}, "functions":{"exm1":{"debug":[{"filename":"ImgSobel4K_MX.cl", "line":17}], "loop_hierachy":{"exm1__no_loop":["exm1.B0"]}}}}';
var summaryJSON='{"performanceSummary":{"name":"Kernel Summary", "columns":["Kernel Name", "Kernel Type", "Autorun", "Workgroup Size", "# Compute Units", "Hyper-Optimized Handshaking"], "children":[{"name":"exm1", "data":["Single work-item", "No", [1, 1, 1], 1, "Off"], "details":[{"type":"text", "text":"Kernel type: Single work-item"}, {"type":"text", "text":"Required workgroup size: (1, 1, 1)"}, {"type":"text", "text":"Maximum workgroup size: 1"}, {"type":"text", "text":"Hyper-optimized handshaking disabled due to instruction \'ImgSobelFunc\' HDL Function Call Operation which does not support it."}], "debug":[[{"filename":"ImgSobel4K_MX.cl", "line":17}]]}]}, "estimatedResources":{"name":"Estimated Resource Usage", "columns":["Kernel Name", "ALUTs ", "FFs  ", "RAMs ", "DSPs ", "MLABs"], "children":[{"name":"exm1", "data":[1536, 1601, 0, 0, 13], "debug":[[{"filename":"ImgSobel4K_MX.cl", "line":17}]]}, {"name":"Board Interface", "classes":["summary-highlight", "nohover"], "data":[13132, 20030, 112, 0, 0]}, {"name":"System description ROM", "classes":["summary-highlight", "nohover"], "data":[2, 71, 2, 0, 0]}, {"name":"Total", "classes":["summary-highlight", "nohover"], "data":[14670, 21702, 114, 0, 13], "data_percent":[1.0438, 0.772071, 1.66496, 0]}, {"name":"Available", "classes":["summary-highlight", "nohover"], "data":[1405440, 2810880, 6847, 3960, 0]}]}, "compileWarnings":{"name":"Compile Warnings", "children":[]}}';
var infoJSON='{"name":"Info","rows":[{"classes":["info-table"],"data":["ImgSobel4K_MX_openCL"],"name":"Project Name"},{"data":["Stratix 10, 1SM21BHU2F53E2VGS1, s10mx_ref:s10mx_hbm_es"],"name":"Target Family, Device, Board"},{"data":["19.4.0 Build 64"],"name":"AOC Version"},{"data":["19.4.0 Build 64 Pro"],"name":"Quartus Version"},{"data":["aoc -profile -v -l ImgSobelFunc_lib.aoclib ImgSobel4K_MX.cl -o ./../device/ImgSobel4K_MX_openCL.aocx"],"name":"Command"},{"data":["Tue Jun 30 12:35:39 2020"],"name":"Reports Generated At"}]}';
var warningsJSON='{"rows":[]}';
var quartusJSON='{"quartusFitClockSummary":{  "name":"Quartus Fit Clock Summary"  ,"columns":["", "Kernel fmax"]  ,"children":[  {    "name":"Frequency (MHz)","data":[309.38]  }]},"quartusFitResourceUsageSummary":{  "name":"Quartus Fit Resource Utilization Summary"  ,"columns":["", "ALMs", "FFs", "RAMs", "DSPs", "MLABs"]  ,"children":[  {"name":"exm1","data":[9614.6 ,24131 ,46 ,0 ,141]  }]}}';
var fileJSON=[{"path":"/home/angelica/Documents/hls/ImgSobel4K_MX/ImgSobelFunc/ImgSobel4K_MX.cl", "name":"ImgSobel4K_MX.cl", "has_active_debug_locs":false, "absName":"/home/angelica/Documents/hls/ImgSobel4K_MX/ImgSobelFunc/ImgSobel4K_MX.cl", "content":"typedef struct vx_image_t{\012    uint8 pixel[8];\012}vx_image_in;\012\012typedef struct vx_imageo_t{\012    uint8 pixel[8];\012}vx_image_out;\012\012#define global_t(data_type, hbm_bank_name) \\\012    __global __attribute((buffer_location(hbm_bank_name))) data_type\012\012void ImgSobelFunc ( global_t (vx_image_in, \"HBM1\")* Img_in,\012			  global_t (vx_image_out, \"HBM1\")* Img_outx\012);\012\012\012__kernel void exm1( global_t(vx_image_in, \"HBM0\")* restrict Img_in,\012                    global_t(vx_image_out, \"HBM1\")* restrict Img_outx\012) {\012    ImgSobelFunc (Img_in, Img_outx);\012}\012\012"}];