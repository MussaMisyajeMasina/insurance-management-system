

<template>
  <div class="card">
    <h3 class="card-header text-center font-weight-bold text-uppercase py-4">claims</h3>
    <div class="card-body">
      <div id="table" class="table-editable">
        <span class="table-add float-right mb-3 mr-2">
          <a href="#!" class="text-success">
            <i class="fas fa-plus fa-2x" aria-hidden="true"></i>
          </a>
        </span>
        <table class="table table-bordered table-responsive-md table-striped text-center">
          <thead>
            <tr>
              <th class="text-center">Claim Number</th>
              <th class="text-center">Policy Number</th>
              <th class="text-center">Category</th>
              <th class="text-center">Subcategory</th>
              <th class="text-center">Date</th>
              <th class="text-center">Sort</th>
              <th class="text-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="pt-3-half" contenteditable="true">1</td>
              <td class="pt-3-half" contenteditable="true">0000</td>
              <td class="pt-3-half" contenteditable="true">Motor</td>
              <td class="pt-3-half" contenteditable="true">third</td>
              <td class="pt-3-half" contenteditable="true">15-06-2019</td>
              <td class="pt-3-half">
                <span class="table-up">
                  <a href="#!" class="indigo-text">
                    <i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i>
                  </a>
                </span>
                <span class="table-down">
                  <a href="#!" class="indigo-text">
                    <i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i>
                  </a>
                </span>
              </td>
              <td>
                <span class="table-remove">
                  <button type="button" class="btn btn-danger btn-rounded btn-sm my-0">Remove</button>
                </span>
              </td>
            </tr>
            <!-- This is our clonable table line -->
            <tr>
              <td class="pt-3-half" contenteditable="true">2</td>
              <td class="pt-3-half" contenteditable="true">0001</td>
              <td class="pt-3-half" contenteditable="true">Motor</td>
              <td class="pt-3-half" contenteditable="true">third</td>
              <td class="pt-3-half" contenteditable="true">15-06-2019</td>
              <td class="pt-3-half">
                <span class="table-up">
                  <a href="#!" class="indigo-text">
                    <i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i>
                  </a>
                </span>
                <span class="table-down">
                  <a href="#!" class="indigo-text">
                    <i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i>
                  </a>
                </span>
              </td>
              <td>
                <span class="table-remove">
                  <button type="button" class="btn btn-danger btn-rounded btn-sm my-0">Remove</button>
                </span>
              </td>
            </tr>
            <!-- This is our clonable table line -->
            <tr>
              <td class="pt-3-half" contenteditable="true">3</td>
              <td class="pt-3-half" contenteditable="true">0002</td>
              <td class="pt-3-half" contenteditable="true">Motor</td>
              <td class="pt-3-half" contenteditable="true">third</td>
              <td class="pt-3-half" contenteditable="true">15-06-2019</td>
              <td class="pt-3-half">
                <span class="table-up">
                  <a href="#!" class="indigo-text">
                    <i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i>
                  </a>
                </span>
                <span class="table-down">
                  <a href="#!" class="indigo-text">
                    <i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i>
                  </a>
                </span>
              </td>
              <td>
                <span class="table-remove">
                  <button type="button" class="btn btn-danger btn-rounded btn-sm my-0">Remove</button>
                </span>
              </td>
            </tr>
            <!-- This is our clonable table line -->
            <tr class="hide">
             <td class="pt-3-half" contenteditable="true">4</td>
              <td class="pt-3-half" contenteditable="true">0003</td>
              <td class="pt-3-half" contenteditable="true">Motor</td>
              <td class="pt-3-half" contenteditable="true">third</td>
              <td class="pt-3-half" contenteditable="true">15-06-2019</td>
              <td class="pt-3-half">
                <span class="table-up">
                  <a href="#!" class="indigo-text">
                    <i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i>
                  </a>
                </span>
                <span class="table-down">
                  <a href="#!" class="indigo-text">
                    <i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i>
                  </a>
                </span>
              </td>
              <td>
                <span class="table-remove">
                  <button type="button" class="btn btn-danger btn-rounded btn-sm my-0">Remove</button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

