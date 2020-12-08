var areaJSON='{"columns":["", "ALUTs", "FFs", "RAMs", "DSPs", "MLABs", "Details"], "debug_enabled":"true", "type":"module", "total_percent":[2.24069, 1.27224, 1.06315, 1.61082, 0.277778], "total":[23336, 39469, 187, 16, 12], "name":"Kernel System", "max_resources":[1853108, 3712450, 11609, 5760, 92655], "children":[{"name":"Static Partition", "type":"partition", "children":[{"name":"Board interface", "type":"resource", "data":[13132, 20030, 112, 0, 0], "details":[{"type":"text", "text":"Platform interface logic."}]}]}, {"name":"Global interconnect", "type":"resource", "data":[5904, 6443, 0, 0, 0], "details":[{"type":"text", "text":"Global interconnect for 3 global loads and 1 global store. Reduce number of global loads and stores to simplify global interconnect."}, {"type":"brief", "text":"For 3 global loads and 1 global store."}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Global Memory Interconnect", "link":"https://www.altera.com/documentation/mwh1391807516407.html#hnj1476724450050"}]}]}, {"name":"System description ROM", "type":"resource", "data":[2, 71, 2, 0, 0], "details":[{"type":"text", "text":"This read-only memory contains information for the host about the system and about each kernel in the system, including kernel names, arguments, and attributes.  The system description ROM ensures that the binary image on the FPGA is compatible with the host program."}, {"type":"brief", "text":"Contains information for the host."}]}, {"name":"test_multiplereads", "compute_units":1, "type":"function", "total_percent":[0.589162, 0.244886, 0.348153, 0.628822, 0.277778], "total_kernel_resources":[4298, 12925, 73, 16, 12], "details":[{"type":"text", "text":"Number of compute units: 1"}, {"type":"text", "text":"Achieved kernel vectorization: 8"}, {"type":"brief", "text":"1 compute unit.\\nAchieved kernel vectorization: 8"}], "children":[{"name":"Function overhead", "type":"resource", "data":[1463, 1467, 0, 0, 6], "details":[{"type":"text", "text":"Kernel dispatch logic."}, {"type":"brief", "text":"Kernel dispatch logic."}]}, {"name":"test_multiplereads.B0", "type":"basicblock", "children":[{"name":"State", "type":"resource", "data":[52, 949, 4, 0, 4], "details":[{"type":"brief", "text":"Live values and control logic"}, {"type":"text", "text":"Resources for live values and control logic. To reduce this area:", "details":[{"type":"text", "text":"reduce size of local variables"}, {"type":"text", "text":"reduce scope of local variables, localizing them as much as possible"}, {"type":"text", "text":"reduce number of nested loops"}]}], "children":[{"name":"No Source Line", "type":"resource", "data":[52, 949, 4, 0, 4]}]}, {"name":"Cluster logic", "type":"resource", "data":[380, 654, 14, 0, 2], "details":[{"type":"brief", "text":"Logic required to efficiently support sets of operations that do not stall"}, {"type":"text", "text":"Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."}]}, {"name":"Computation", "type":"resource", "children":[{"name":"test_bw10.cl:34", "type":"resource", "data":[2403, 9855, 55, 16, 0], "debug":[[{"filename":"/home/angelica/Documents/exm_GX/exm_opencl_test_access/test_access/device/test_bw10.cl", "line":34}]], "children":[{"name":"Hardened Floating-Point Dot Product of Size 2", "type":"resource", "count":8, "data":[768, 1536, 0, 16, 0]}, {"name":"Load", "type":"resource", "count":3, "data":[1287, 5883, 39, 0, 0], "details":[{"type":"text", "text":"Load uses a Burst-coalesced LSU"}, {"type":"brief", "text":"Burst-coalesced LSU"}]}, {"name":"Store", "type":"resource", "count":1, "data":[348, 2436, 16, 0, 0], "details":[{"type":"text", "text":"Store uses a Burst-coalesced LSU"}, {"type":"brief", "text":"Burst-coalesced LSU"}]}], "replace_name":"true"}]}]}]}]}';
var area_srcJSON='{"max_resources":[1853108,3712450,11609,5760,92655],"name":"Kernel System","children":[{"name":"Static Partition","type":"partition","children":[{"name":"Board interface","type":"resource","data":[13132,20030,112,0,0],"details":[{"text":"Platform interface logic.","type":"text"}]}]},{"name":"Global interconnect","type":"resource","data":[5904,6443,0,0,0],"details":[{"text":"Global interconnect for 3 global loads and 1 global store. Reduce number of global loads and stores to simplify global interconnect.","type":"text"},{"text":"For 3 global loads and 1 global store.","type":"brief"},{"text":"See %L for more information","type":"text","links":[{"link":"https://www.altera.com/documentation/mwh1391807516407.html#hnj1476724450050","guide":"Best Practices Guide : Global Memory Interconnect"}]}]},{"name":"System description ROM","type":"resource","data":[2,71,2,0,0],"details":[{"text":"This read-only memory contains information for the host about the system and about each kernel in the system, including kernel names, arguments, and attributes.  The system description ROM ensures that the binary image on the FPGA is compatible with the host program.","type":"text"},{"text":"Contains information for the host.","type":"brief"}]},{"name":"test_multiplereads","total_kernel_resources":[4298,12925,73,16,12],"type":"function","total_percent":[0.589162,0.244886,0.348153,0.628822,0.277778],"children":[{"name":"Data control overhead","type":"resource","data":[380,654,14,0,2],"details":[{"text":"Feedback+Cluster logic","type":"brief"}]},{"name":"Function overhead","type":"resource","data":[1463,1467,0,0,6],"details":[{"text":"Kernel dispatch logic.","type":"text"},{"text":"Kernel dispatch logic.","type":"brief"}]},{"name":"No Source Line","children":[{"count":1,"name":"State","debug":[[{"filename":"","line":0}]],"type":"resource","data":[52,949,4,0,4]}],"type":"resource","data":[52,949,4,0,4]},{"replace_name":"true","debug":[[{"filename":"/home/angelica/Documents/exm_GX/exm_opencl_test_access/test_access/device/test_bw10.cl","line":34}]],"name":"/home/angelica/Documents/exm_GX/exm_opencl_test_access/test_access/device/test_bw10.cl:34","children":[{"count":8,"name":"Hardened Floating-Point Dot Product of Size 2","debug":[[{"filename":"/home/angelica/Documents/exm_GX/exm_opencl_test_access/test_access/device/test_bw10.cl","line":34}]],"type":"resource","data":[768,1536,0,16,0]},{"count":3,"name":"Load","debug":[[{"filename":"/home/angelica/Documents/exm_GX/exm_opencl_test_access/test_access/device/test_bw10.cl","line":34}]],"type":"resource","data":[1287,5883,39,0,0]},{"count":1,"name":"Store","debug":[[{"filename":"/home/angelica/Documents/exm_GX/exm_opencl_test_access/test_access/device/test_bw10.cl","line":34}]],"type":"resource","data":[348,2436,16,0,0]}],"data":[2403,9855,55,16,0],"type":"resource"}],"data":[4298,12925,73,16,12],"details":[{"text":"Number of compute units: 1","type":"text"},{"text":"Achieved kernel vectorization: 8","type":"text"},{"text":"1 compute unit.\\nAchieved kernel vectorization: 8","type":"brief"}],"compute_units":1}],"data":[10204,19439,75,16,12],"total_percent":[2.24069,1.27224,1.06315,1.61082,0.277778],"total":[23336,39469,187,16,12],"debug_enabled":"true","columns":["","ALUTs","FFs","RAMs","DSPs","MLABs","Details"],"type":"module"}';
var mavJSON='{"nodes":[{"type":"kernel", "id":2, "name":"test_multiplereads", "children":[{"type":"bb", "id":3, "name":"test_multiplereads.B0", "children":[{"type":"inst", "id":4, "name":"Load", "debug":[[{"filename":"/home/angelica/Documents/exm_GX/exm_opencl_test_access/test_access/device/test_bw10.cl", "line":34}]], "details":[{"type":"table", "Width":"256 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Start Cycle":"36", "Latency":"512", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.altera.com/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":5, "name":"Load", "debug":[[{"filename":"/home/angelica/Documents/exm_GX/exm_opencl_test_access/test_access/device/test_bw10.cl", "line":34}]], "details":[{"type":"table", "Width":"256 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Start Cycle":"36", "Latency":"512", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.altera.com/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":6, "name":"Load", "debug":[[{"filename":"/home/angelica/Documents/exm_GX/exm_opencl_test_access/test_access/device/test_bw10.cl", "line":34}]], "details":[{"type":"table", "Width":"256 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Start Cycle":"36", "Latency":"512", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.altera.com/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":7, "name":"Store", "debug":[[{"filename":"/home/angelica/Documents/exm_GX/exm_opencl_test_access/test_access/device/test_bw10.cl", "line":34}]], "details":[{"type":"table", "Width":"256 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Start Cycle":"589", "Latency":"64", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.altera.com/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":8, "name":"begin", "details":[{"type":"table", "Start Cycle":"0", "Latency":"1"}]}, {"type":"inst", "id":9, "name":"end", "details":[{"type":"table", "Start Cycle":"653", "Latency":"1"}]}], "details":[{"type":"table", "Latency":"653"}]}]}, {"type":"memtype", "id":1, "name":"Global Memory", "children":[{"type":"memsys", "id":10, "name":"DDR", "details":[{"type":"table", "Number of banks":"1"}]}]}], "links":[{"from":4, "to":9}, {"from":5, "to":9}, {"from":6, "to":9}, {"from":7, "to":9}, {"from":8, "to":4}, {"from":8, "to":5}, {"from":8, "to":6}, {"from":4, "to":7}, {"from":5, "to":7}, {"from":6, "to":7}, {"from":10, "to":6}, {"from":10, "to":4}, {"from":7, "to":10}, {"from":10, "to":5}]}';
var lmvJSON='{"nodes":[], "links":[]}';
var loopsJSON='{"columns":["", "Pipelined", "II", "Bottleneck", "Details"], "children":[{"name":"Kernel: test_multiplereads", "data":["", "", ""], "debug":[[{"filename":"/home/angelica/Documents/exm_GX/exm_opencl_test_access/test_access/device/test_bw10.cl", "line":9}]], "details":[{"type":"brief", "text":"ND-Range"}, {"type":"text", "text":"ND-Range"}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Kernels", "link":"https://www.altera.com/documentation/mwh1391807516407.html#ipp1476408832230"}]}]}]}';
var summaryJSON='{"performanceSummary":{"name":"Kernel Summary", "columns":["Kernel Name", "Kernel Type", "Autorun", "Workgroup Size", "# Compute Units", "HyperFlex Control Optimizations"], "children":[{"name":"test_multiplereads", "data":["NDRange", "No", [4096, 1, 1], 1, "On"], "details":[{"type":"text", "text":"Kernel type: NDRange"}, {"type":"text", "text":"Required workgroup size: (4096, 1, 1)"}, {"type":"text", "text":"Maximum workgroup size: 4096"}, {"type":"text", "text":"The kernel does not use any work-group information (such as get_local_id() or get_group_id()).Local work-group size will be automatically modified to match global work-group size on launch.This is a hardware optimization."}], "debug":[[{"filename":"/home/angelica/Documents/exm_GX/exm_opencl_test_access/test_access/device/test_bw10.cl", "line":9}]]}]}, "estimatedResources":{"name":"Estimated Resource Usage", "columns":["Kernel Name", "ALUTs ", "FFs  ", "RAMs ", "DSPs ", "MLABs"], "children":[{"name":"test_multiplereads", "data":[4298, 12925, 73, 16, 12], "debug":[[{"filename":"/home/angelica/Documents/exm_GX/exm_opencl_test_access/test_access/device/test_bw10.cl", "line":9}]]}, {"name":"Global Interconnect", "classes":["summary-highlight", "nohover"], "data":[5904, 6443, 0, 0, 0]}, {"name":"Board Interface", "classes":["summary-highlight", "nohover"], "data":[13132, 20030, 112, 0, 0]}, {"name":"Total", "classes":["summary-highlight", "nohover"], "data":[23336, 39469, 187, 16, 12], "data_percent":[1.25929, 1.06315, 1.61082, 0.277778, 2.22979]}, {"name":"Available", "classes":["summary-highlight", "nohover"], "data":[1853108, 3712450, 11609, 5760, 0]}]}, "compileWarnings":{"name":"Compile Warnings", "children":[]}}';
var infoJSON='{"name":"Info","rows":[{"classes":["info-table"],"name":"Project Name","data":["test_bw10"]},{"name":"Target Family, Device, Board","data":["Stratix 10, 1SG280LU3F50E1VGS1, s10_ref:s10gx"]},{"name":"AOC Version","data":["18.1.0 Build 222"]},{"name":"Quartus Version","data":["18.1.0 Build 222 Pro"]},{"name":"Command","data":["aoc -D INPUTS=3 -D V=8 -profile=all -report -v -fp-relaxed test_bw10.cl -o test_bw10_8_3.aocx"]},{"name":"Reports Generated At","data":["Thu Jun 13 23:56:08 2019"]}]}';
var warningsJSON='{"rows":[]}';
var quartusJSON='{"quartusFitClockSummary":{  "name":"Quartus Fit Clock Summary"  ,"columns":["", "Kernel fmax"]  ,"children":[  {    "name":"Frequency (MHz)","data":[395.0]  }]},"quartusFitResourceUsageSummary":{  "name":"Quartus Fit Resource Utilization Summary"  ,"columns":["", "ALMs", "FFs", "RAMs", "DSPs", "MLABs"]  ,"children":[  {"name":"test_multiplereads","data":[9642.7 ,30169 ,75 ,16 ,43]  }]}}';
var fileJSON=[{"path":"/home/angelica/Documents/exm_GX/exm_opencl_test_access/test_access/device/test_bw10.cl", "name":"test_bw10.cl", "has_active_debug_locs":false, "absName":"/home/angelica/Documents/exm_GX/exm_opencl_test_access/test_access/device/test_bw10.cl", "content":"//Multiple read access\012 // ACL kernel for adding two input vectors\012#define REQD_WG_SIZE (1024 * 32)\012\012//#define V 16\012//#define INPUTS 3\012__attribute((reqd_work_group_size(REQD_WG_SIZE,1,1)))\012__attribute((num_simd_work_items(V)))\012__kernel void test_multiplereads(__global const float *x, \012                         __global const float *y,\012						#if INPUTS >= 3\012                         __global const float *y1,\012						#endif \012\012						#if INPUTS >= 4\012                         __global const float *y2,\012						#endif \012\012						#if INPUTS >= 5\012                         __global const float *y3,\012						#endif \012\012                         __global float *restrict z,\012					     uint arg)\012{\012    // get index of the work item\012    int index = get_global_id(0);\012    // add the vector elements\012	#if INPUTS == 1\012    z[index] = x[index]; //+ y[index];\012	#elif INPUTS == 2\012    z[index] = x[index] + y[index];\012	#elif INPUTS == 3\012    z[index] = x[index] + y[index] + y1[index];\012	#elif INPUTS == 4\012    z[index] = x[index] + y[index] + y1[index] + y2[index];\012	#elif INPUTS == 5\012    z[index] = x[index] + y[index] + y1[index] + y2[index] + y3[index];\012	#endif\012}\012\012"}];