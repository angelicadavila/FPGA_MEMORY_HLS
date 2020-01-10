var areaJSON='{"columns":["", "ALUTs", "FFs", "RAMs", "DSPs", "MLABs", "Details"], "debug_enabled":"true", "type":"module", "total_percent":[1.96433, 1.12546, 0.924268, 1.42131, 0.0694444], "total":[20556, 34313, 165, 4, 15], "name":"Kernel System", "max_resources":[1853108, 3712450, 11609, 5760, 92655], "children":[{"name":"Static Partition", "type":"partition", "children":[{"name":"Board interface", "type":"resource", "data":[13132, 20030, 112, 0, 0], "details":[{"type":"text", "text":"Platform interface logic."}]}]}, {"name":"Global interconnect", "type":"resource", "data":[4121, 5284, 0, 0, 0], "details":[{"type":"text", "text":"Global interconnect for 2 global loads and 1 global store. Reduce number of global loads and stores to simplify global interconnect."}, {"type":"brief", "text":"For 2 global loads and 1 global store."}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Global Memory Interconnect", "link":"https://www.altera.com/documentation/mwh1391807516407.html#hnj1476724450050"}]}]}, {"name":"System description ROM", "type":"resource", "data":[2, 71, 2, 0, 0], "details":[{"type":"text", "text":"This read-only memory contains information for the host about the system and about each kernel in the system, including kernel names, arguments, and attributes.  The system description ROM ensures that the binary image on the FPGA is compatible with the host program."}, {"type":"brief", "text":"Contains information for the host."}]}, {"name":"DotProduct", "compute_units":1, "type":"function", "total_percent":[0.428156, 0.194322, 0.240488, 0.439314, 0.0694444], "total_kernel_resources":[3301, 8928, 51, 4, 15], "details":[{"type":"text", "text":"Number of compute units: 1"}, {"type":"brief", "text":"1 compute unit."}], "children":[{"name":"Function overhead", "type":"resource", "data":[1463, 1467, 0, 0, 6], "details":[{"type":"text", "text":"Kernel dispatch logic."}, {"type":"brief", "text":"Kernel dispatch logic."}]}, {"name":"DotProduct.B0", "type":"basicblock", "children":[{"name":"State", "type":"resource", "data":[96, 668, 3, 0, 8], "details":[{"type":"brief", "text":"Live values and control logic"}, {"type":"text", "text":"Resources for live values and control logic. To reduce this area:", "details":[{"type":"text", "text":"reduce size of local variables"}, {"type":"text", "text":"reduce scope of local variables, localizing them as much as possible"}, {"type":"text", "text":"reduce number of nested loops"}]}], "children":[{"name":"No Source Line", "type":"resource", "data":[96, 668, 3, 0, 8]}]}, {"name":"Cluster logic", "type":"resource", "data":[251, 342, 6, 0, 1], "details":[{"type":"brief", "text":"Logic required to efficiently support sets of operations that do not stall"}, {"type":"text", "text":"Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."}]}, {"name":"Computation", "type":"resource", "children":[{"name":"DotProduct.cl:35", "type":"resource", "data":[35, 1, 0, 0, 0], "debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl", "line":35}]], "children":[{"name":"32-bit Integer Compare", "type":"resource", "count":1, "data":[35, 1, 0, 0, 0]}], "replace_name":"true"}, {"name":"DotProduct.cl:49", "type":"resource", "data":[608.5, 3112.5, 22.5, 0, 0], "debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl", "line":49}]], "children":[{"name":"Load", "type":"resource", "count":2, "data":[218.5, 984.5, 6.5, 0, 0], "details":[{"type":"text", "text":"Load uses a Burst-coalesced LSU"}, {"type":"brief", "text":"Burst-coalesced LSU"}]}, {"name":"Store", "type":"resource", "count":1, "data":[390, 2128, 16, 0, 0], "details":[{"type":"text", "text":"Store uses a Burst-coalesced LSU"}, {"type":"brief", "text":"Burst-coalesced LSU"}]}], "replace_name":"true"}, {"name":"DotProduct.cl:51", "type":"resource", "data":[314.5, 1176.5, 6.5, 2, 0], "debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl", "line":51}]], "children":[{"name":"Hardened Floating-Point Dot Product of Size 2", "type":"resource", "count":1, "data":[96, 192, 0, 2, 0]}, {"name":"Load", "type":"resource", "count":2, "data":[218.5, 984.5, 6.5, 0, 0], "details":[{"type":"text", "text":"Load uses a Burst-coalesced LSU"}, {"type":"brief", "text":"Burst-coalesced LSU"}]}], "replace_name":"true"}, {"name":"DotProduct.cl:53", "type":"resource", "data":[218.5, 984.5, 6.5, 0, 0], "debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl", "line":53}]], "children":[{"name":"Load", "type":"resource", "count":2, "data":[218.5, 984.5, 6.5, 0, 0], "details":[{"type":"text", "text":"Load uses a Burst-coalesced LSU"}, {"type":"brief", "text":"Burst-coalesced LSU"}]}], "replace_name":"true"}, {"name":"DotProduct.cl:55", "type":"resource", "data":[314.5, 1176.5, 6.5, 2, 0], "debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl", "line":55}]], "children":[{"name":"Hardened Floating-Point Dot Product of Size 2", "type":"resource", "count":1, "data":[96, 192, 0, 2, 0]}, {"name":"Load", "type":"resource", "count":2, "data":[218.5, 984.5, 6.5, 0, 0], "details":[{"type":"text", "text":"Load uses a Burst-coalesced LSU"}, {"type":"brief", "text":"Burst-coalesced LSU"}]}], "replace_name":"true"}]}]}]}]}';
var area_srcJSON='{"max_resources":[1853108,3712450,11609,5760,92655],"name":"Kernel System","children":[{"name":"Static Partition","type":"partition","children":[{"name":"Board interface","type":"resource","data":[13132,20030,112,0,0],"details":[{"text":"Platform interface logic.","type":"text"}]}]},{"name":"Global interconnect","type":"resource","data":[4121,5284,0,0,0],"details":[{"text":"Global interconnect for 2 global loads and 1 global store. Reduce number of global loads and stores to simplify global interconnect.","type":"text"},{"text":"For 2 global loads and 1 global store.","type":"brief"},{"text":"See %L for more information","type":"text","links":[{"link":"https://www.altera.com/documentation/mwh1391807516407.html#hnj1476724450050","guide":"Best Practices Guide : Global Memory Interconnect"}]}]},{"name":"System description ROM","type":"resource","data":[2,71,2,0,0],"details":[{"text":"This read-only memory contains information for the host about the system and about each kernel in the system, including kernel names, arguments, and attributes.  The system description ROM ensures that the binary image on the FPGA is compatible with the host program.","type":"text"},{"text":"Contains information for the host.","type":"brief"}]},{"name":"DotProduct","total_kernel_resources":[3301,8928,51,4,15],"type":"function","total_percent":[0.428156,0.194322,0.240488,0.439314,0.0694444],"children":[{"name":"Data control overhead","type":"resource","data":[251,342,6,0,1],"details":[{"text":"Feedback+Cluster logic","type":"brief"}]},{"name":"Function overhead","type":"resource","data":[1463,1467,0,0,6],"details":[{"text":"Kernel dispatch logic.","type":"text"},{"text":"Kernel dispatch logic.","type":"brief"}]},{"name":"No Source Line","children":[{"count":1,"name":"State","debug":[[{"filename":"","line":0}]],"type":"resource","data":[96,668,3,0,8]}],"type":"resource","data":[96,668,3,0,8]},{"replace_name":"true","debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl","line":35}]],"name":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl:35","children":[{"count":1,"name":"32-bit Integer Compare","debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl","line":35}]],"type":"resource","data":[35,1,0,0,0]}],"data":[35,1,0,0,0],"type":"resource"},{"replace_name":"true","debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl","line":49}]],"name":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl:49","children":[{"count":2,"name":"Load","debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl","line":49}]],"type":"resource","data":[218.5,984.5,6.5,0,0]},{"count":1,"name":"Store","debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl","line":49}]],"type":"resource","data":[390,2128,16,0,0]}],"data":[608.5,3112.5,22.5,0,0],"type":"resource"},{"replace_name":"true","debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl","line":51}]],"name":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl:51","children":[{"count":1,"name":"Hardened Floating-Point Dot Product of Size 2","debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl","line":51}]],"type":"resource","data":[96,192,0,2,0]},{"count":2,"name":"Load","debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl","line":51}]],"type":"resource","data":[218.5,984.5,6.5,0,0]}],"data":[314.5,1176.5,6.5,2,0],"type":"resource"},{"replace_name":"true","debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl","line":53}]],"name":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl:53","children":[{"count":2,"name":"Load","debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl","line":53}]],"type":"resource","data":[218.5,984.5,6.5,0,0]}],"data":[218.5,984.5,6.5,0,0],"type":"resource"},{"replace_name":"true","debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl","line":55}]],"name":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl:55","children":[{"count":1,"name":"Hardened Floating-Point Dot Product of Size 2","debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl","line":55}]],"type":"resource","data":[96,192,0,2,0]},{"count":2,"name":"Load","debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl","line":55}]],"type":"resource","data":[218.5,984.5,6.5,0,0]}],"data":[314.5,1176.5,6.5,2,0],"type":"resource"}],"data":[3301,8928,51,4,15],"details":[{"text":"Number of compute units: 1","type":"text"},{"text":"1 compute unit.","type":"brief"}],"compute_units":1}],"data":[7424,14283,53,4,15],"total_percent":[1.96433,1.12546,0.924268,1.42131,0.0694444],"total":[20556,34313,165,4,15],"debug_enabled":"true","columns":["","ALUTs","FFs","RAMs","DSPs","MLABs","Details"],"type":"module"}';
var mavJSON='{"nodes":[{"type":"kernel", "id":2, "name":"DotProduct", "children":[{"type":"bb", "id":3, "name":"DotProduct.B0", "children":[{"type":"inst", "id":4, "name":"Load", "debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl", "line":49}]], "details":[{"type":"table", "Width":"128 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Start Cycle":"36", "Latency":"512", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.altera.com/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":5, "name":"Load", "debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl", "line":49}]], "details":[{"type":"table", "Width":"128 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Start Cycle":"36", "Latency":"512", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.altera.com/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":6, "name":"Store", "debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl", "line":49}]], "details":[{"type":"table", "Width":"32 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Stores to":"c", "Start Cycle":"597", "Latency":"64", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.altera.com/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":7, "name":"begin", "details":[{"type":"table", "Start Cycle":"0", "Latency":"1"}]}, {"type":"inst", "id":8, "name":"end", "details":[{"type":"table", "Start Cycle":"661", "Latency":"1"}]}], "details":[{"type":"table", "Latency":"661"}]}]}, {"type":"memtype", "id":1, "name":"Global Memory", "children":[{"type":"memsys", "id":9, "name":"DDR", "details":[{"type":"table", "Number of banks":"1"}]}]}], "links":[{"from":4, "to":8}, {"from":5, "to":8}, {"from":6, "to":8}, {"from":7, "to":4}, {"from":7, "to":5}, {"from":4, "to":6}, {"from":5, "to":6}, {"from":9, "to":5}, {"from":9, "to":4}, {"from":6, "to":9}]}';
var lmvJSON='{"nodes":[], "links":[]}';
var loopsJSON='{"columns":["", "Pipelined", "II", "Bottleneck", "Details"], "children":[{"name":"Kernel: DotProduct", "data":["", "", ""], "debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl", "line":23}]], "details":[{"type":"brief", "text":"ND-Range"}, {"type":"text", "text":"ND-Range"}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Kernels", "link":"https://www.altera.com/documentation/mwh1391807516407.html#ipp1476408832230"}]}]}]}';
var summaryJSON='{"performanceSummary":{"name":"Kernel Summary", "columns":["Kernel Name", "Kernel Type", "Autorun", "Workgroup Size", "# Compute Units", "HyperFlex Control Optimizations"], "children":[{"name":"DotProduct", "data":["NDRange", "No", "n/a", 1, "On"], "details":[{"type":"text", "text":"Kernel type: NDRange"}, {"type":"text", "text":"The kernel does not use any work-group information (such as get_local_id() or get_group_id()).Local work-group size will be automatically modified to match global work-group size on launch.This is a hardware optimization."}], "debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl", "line":23}]]}]}, "estimatedResources":{"name":"Estimated Resource Usage", "columns":["Kernel Name", "ALUTs ", "FFs  ", "RAMs ", "DSPs ", "MLABs"], "children":[{"name":"DotProduct", "data":[3301, 8928, 51, 4, 15], "debug":[[{"filename":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl", "line":23}]]}, {"name":"Global Interconnect", "classes":["summary-highlight", "nohover"], "data":[4121, 5284, 0, 0, 0]}, {"name":"Board Interface", "classes":["summary-highlight", "nohover"], "data":[13132, 20030, 112, 0, 0]}, {"name":"Total", "classes":["summary-highlight", "nohover"], "data":[20556, 34313, 165, 4, 15], "data_percent":[1.10927, 0.924268, 1.42131, 0.0694444, 1.9507]}, {"name":"Available", "classes":["summary-highlight", "nohover"], "data":[1853108, 3712450, 11609, 5760, 0]}]}, "compileWarnings":{"name":"Compile Warnings", "children":[]}}';
var infoJSON='{"name":"Info","rows":[{"classes":["info-table"],"name":"Project Name","data":["DotProduct"]},{"name":"Target Family, Device, Board","data":["Stratix 10, 1SG280LU3F50E1VGS1, s10_ref:s10gx"]},{"name":"AOC Version","data":["18.1.0 Build 222"]},{"name":"Quartus Version","data":["18.1.0 Build 222 Pro"]},{"name":"Command","data":["aoc -rtl DotProduct.cl"]},{"name":"Reports Generated At","data":["Thu Sep 19 17:37:53 2019"]}]}';
var warningsJSON='{"rows":[]}';
var quartusJSON='{"quartusFitClockSummary":{"name":"Quartus Fit Summary","children":[{"name":"Run Quartus compile to populate this section. See details for more information.","details":[{"text":"This section contains a summary of the area and fmax data generated by compiling the kernels through Quartus. \\nTo generate the data, run a Quartus compile on the project created for this design. \\nTo run the Quartus compile, please run command without flag -c, -rtl or -march=emulator","type":"text"}]}]}}';
var fileJSON=[{"path":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl", "name":"DotProduct.cl", "has_active_debug_locs":false, "absName":"/export/data/users/angelicadg/exm_grendel_GX/DotProduct/DotProduct.cl", "content":"/*\012\012 * Copyright 1993-2010 NVIDIA Corporation.  All rights reserved.\012\012 *\012\012 * Please refer to the NVIDIA end user license agreement (EULA) associated\012\012 * with this source code for terms and conditions that govern your use of\012\012 * this software. Any use, reproduction, disclosure, or distribution of\012\012 * this software and related documentation outside the terms of the EULA\012\012 * is strictly prohibited.\012\012 *\012\012 */\012\012 \012\012 __kernel void DotProduct (__global float* a, __global float* b, __global float* c, int iNumElements)\012\012{\012\012    // find position in global arrays\012\012    int iGID = get_global_id(0);\012\012\012\012    // bound check (equivalent to the limit on a 'for' loop for standard/serial C code\012\012    if (iGID >= iNumElements)\012\012    {   \012\012        return; \012\012    }\012\012\012\012    // process \012\012    int iInOffset = iGID << 2;\012\012    c[iGID] = a[iInOffset] * b[iInOffset] \012\012               + a[iInOffset + 1] * b[iInOffset + 1]\012\012               + a[iInOffset + 2] * b[iInOffset + 2]\012\012               + a[iInOffset + 3] * b[iInOffset + 3];\012\012}\012"}];