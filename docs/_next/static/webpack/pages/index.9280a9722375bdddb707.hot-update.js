webpackHotUpdate_N_E("pages/index",{

/***/ "./payload/project.ts":
/*!****************************!*\
  !*** ./payload/project.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var project = {
  disable: false,
  list: [{
    title: '업무 보고 자동화 및 도메인 지식 축적 체계 구축',
    startedAt: '2026-03',
    where: '코리아엑스퍼트(주)',
    descriptions: [{
      content: '업무 보고 프로세스 자동화',
      weight: 'MEDIUM',
      descriptions: [{
        content: '기존 PPT 기반 업무 보고 및 수작업 취합 프로세스를 Notion 자동화로 전환 (대상 약 25명)'
      }, {
        content: '팀원 PPT를 개별 열어 복사·정리하던 관리자 취합 작업을 제거하고, Notion 자동 취합 + 코멘트 방식으로 개선'
      }, {
        content: 'Claude API를 활용하여 보고 초안 및 취합 초안 자동 생성 기능 구현'
      }]
    }, {
      content: '도메인 지식 축적 체계 구축',
      weight: 'MEDIUM',
      descriptions: [{
        content: '축적된 업무 데이터를 기반으로 Claude API를 활용한 도메인 지식 초안 자동 생성 체계 구축'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '관리자 수작업 취합 업무 제거 — Notion 자동 취합으로 전환'
      }, {
        content: 'Claude API 연동으로 보고·취합·지식 초안 작성 자동화'
      }, {
        content: '현재 1개 팀 대상 시범 운영 중'
      }]
    }]
  }, {
    title: '롯데손해보험 고지정보 자동입력',
    startedAt: '2026-01',
    endedAt: '2026-02',
    where: '롯데손해보험',
    descriptions: [{
      content: '고지정보 자동입력 기능 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '질병별 공통질문·추가질문으로 구성된 고지정보를 수기 입력에서 사고이력 데이터 기반 자동입력으로 전환하는 기능 개발'
      }, {
        content: '현업과 직접 커뮤니케이션하며 요구사항 정리 및 기능 반영'
      }, {
        content: '개발부터 테스트, 운영 반영까지 단독 수행'
      }]
    }, {
      content: '공통 질문 응답에 따른 추가 질문 제어 및 유효성 검증 로직 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '공통 질문 응답에 따라 추가 질문을 동적으로 제어'
      }, {
        content: '유효성 검증을 통해 알맞은 답변만 입력되도록 처리'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '자동입력 도입으로 현업 건당 입력 시간 50% 이상 단축'
      }, {
        content: '기존 잘못된 입력으로 인한 심사 반려 케이스를 유효성 검증 로직으로 차단'
      }]
    }]
  }, {
    title: 'DB생명 질병심사 기능 개선',
    startedAt: '2025-09',
    endedAt: '2025-12',
    where: 'DB생명',
    descriptions: [{
      content: '질병심사 기능 대응 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '추가 상품 출시에 따른 질병심사 기능 대응 개발'
      }, {
        content: '데이터 증가로 비대해진 특정 테이블 분리 처리'
      }, {
        content: '상품 코드를 활용한 LIST 파티션 테이블 설계 및 적용'
      }, {
        content: '기존 소스 및 쿼리 수정 최소화'
      }, {
        content: '대용량 데이터 적재 및 데이터 정합성 검증 수행'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '테이블 구조 개선으로 유지보수성 및 조회 성능 향상'
      }, {
        content: '향후 상품 추가 시 확장 가능한 DB 구조 확보'
      }]
    }]
  }, {
    title: 'KB Life 질병심사 기능 개선',
    startedAt: '2025-07',
    endedAt: '2025-08',
    where: 'KB Life',
    descriptions: [{
      content: '질병심사 기능 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '건강 상품 출시 대응 질병심사 기능 개발'
      }, {
        content: '5년 / 10년 시나리오 판 분리하여 심사 구조 개선'
      }, {
        content: '개발, 테스트, 운영 반영 전 과정 단독 수행'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '실제 개발 기간 1주, 테스트 포함 2주 이내 기능 구현'
      }, {
        content: '최초 계획된 상품 출시 일정에 맞춰 운영 반영 완료'
      }]
    }]
  }, {
    title: '하나생명 제3보험 시스템 구축 (청약심사 자동화)',
    startedAt: '2024-08',
    endedAt: '2025-06',
    where: '하나생명',
    descriptions: [{
      content: '콘텐츠 배포 기능',
      weight: 'MEDIUM',
      descriptions: [{
        content: '개발계 → 테스트계 → 운영계 데이터 배포 기능 개선'
      }, {
        content: '선택적 배포가 가능하도록 배포 프로세스 개선'
      }, {
        content: '배포 파일 다운로드 / 업로드 기능 구현'
      }, {
        content: '간단한 결재 및 예약 배포 기능 개발'
      }, {
        content: '대용량 데이터 처리 성능 개선'
      }, {
        content: '단건 SELECT 방식 → 1,000건 단위 일괄 처리 방식으로 개선'
      }, {
        content: '화면에서 각 배포 대상 컨텐츠를 불러오는 부분을 비동기로 처리하여 초기 로딩 속도 개선'
      }]
    }, {
      content: '게시판 / 통계 화면',
      weight: 'MEDIUM',
      descriptions: [{
        content: '요구사항에 맞춰 기존 게시판 화면 커스터마이징'
      }, {
        content: '심사 결과를 각 특성에 맞게 총 6개 화면으로 구성하여 제공'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: 'DB 부하 감소'
      }, {
        content: '데이터 조회 및 파일 생성 속도 개선'
      }, {
        content: '운영 환경에서 안정적인 대용량 배포 체계 구축'
      }, {
        content: 'DBA 요청 없이, 운영 중 변경 사항 반영 가능'
      }]
    }]
  }, {
    title: 'The KE 프로파일 및 장비 관리 시스템',
    startedAt: '2024-03',
    endedAt: '2024-07',
    where: '코리아엑스퍼트(주)',
    descriptions: [{
      content: '사내 인력·장비 관리 시스템 구축',
      weight: 'MEDIUM',
      descriptions: [{
        content: '이력서 수정 승인 페이지 개발'
      }, {
        content: '관리자 메뉴 개발 및 사용자 권한 관리'
      }, {
        content: '로그 관리 (AOP, Logback 활용)'
      }, {
        content: '실시간 서버 자원 모니터링'
      }, {
        content: 'Docker Compose 기반 개발/운영 환경 구축'
      }, {
        content: 'Jenkins 자동 빌드·배포 환경 구성'
      }]
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (project);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGF5bG9hZC9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbInByb2plY3QiLCJkaXNhYmxlIiwibGlzdCIsInRpdGxlIiwic3RhcnRlZEF0Iiwid2hlcmUiLCJkZXNjcmlwdGlvbnMiLCJjb250ZW50Iiwid2VpZ2h0IiwiZW5kZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUEsa0RBQU1BLE9BQXlCLEdBQUc7QUFDaENDLFNBQU8sRUFBRSxLQUR1QjtBQUVoQ0MsTUFBSSxFQUFFLENBQ0o7QUFDRUMsU0FBSyxFQUFFLDZCQURUO0FBRUVDLGFBQVMsRUFBRSxTQUZiO0FBR0VDLFNBQUssRUFBRSxZQUhUO0FBSUVDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUUsZ0JBRFg7QUFFRUMsWUFBTSxFQUFFLFFBRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRFksRUFFWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUZZLEVBR1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FIWTtBQUhoQixLQURZLEVBVVo7QUFDRUEsYUFBTyxFQUFFLGlCQURYO0FBRUVDLFlBQU0sRUFBRSxRQUZWO0FBR0VGLGtCQUFZLEVBQUUsQ0FDWjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURZO0FBSGhCLEtBVlksRUFpQlo7QUFDRUEsYUFBTyxFQUFFLElBRFg7QUFFRUMsWUFBTSxFQUFFLE1BRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRFksRUFFWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUZZLEVBR1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FIWTtBQUhoQixLQWpCWTtBQUpoQixHQURJLEVBaUNKO0FBQ0VKLFNBQUssRUFBRSxrQkFEVDtBQUVFQyxhQUFTLEVBQUUsU0FGYjtBQUdFSyxXQUFPLEVBQUUsU0FIWDtBQUlFSixTQUFLLEVBQUUsUUFKVDtBQUtF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QUFFLGFBRFg7QUFFRUMsWUFBTSxFQUFFLFFBRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRFksRUFFWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUZZO0FBSGhCLEtBZFksRUFzQlo7QUFDRUEsYUFBTyxFQUFFLElBRFg7QUFFRUMsWUFBTSxFQUFFLE1BRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRFksRUFFWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUZZLEVBR1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FIWSxFQUlaO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BSlk7QUFIaEIsS0F0Qlk7QUFMaEIsR0F0SEksRUE2Sko7QUFDRUosU0FBSyxFQUFFLHlCQURUO0FBRUVDLGFBQVMsRUFBRSxTQUZiO0FBR0VLLFdBQU8sRUFBRSxTQUhYO0FBSUVKLFNBQUssRUFBRSxZQUpUO0FBS0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUUsb0JBRFg7QUFFRUMsWUFBTSxFQUFFLFFBRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRFksRUFFWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUZZLEVBR1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FIWSxFQUlaO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BSlksRUFLWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUxZLEVBTVo7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FOWTtBQUhoQixLQURZO0FBTGhCLEdBN0pJO0FBRjBCLENBQWxDO0FBc0xlUCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MjgwYTk3MjIzNzViZGRkYjcwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVByb2plY3QgfSBmcm9tICcuLi9jb21wb25lbnQvcHJvamVjdC9JUHJvamVjdCc7XHJcblxyXG5jb25zdCBwcm9qZWN0OiBJUHJvamVjdC5QYXlsb2FkID0ge1xyXG4gIGRpc2FibGU6IGZhbHNlLFxyXG4gIGxpc3Q6IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfsl4XrrLQg67O06rOgIOyekOuPme2ZlCDrsI8g64+E66mU7J24IOyngOyLnSDstpXsoIEg7LK06rOEIOq1rOy2lScsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjYtMDMnLFxyXG4gICAgICB3aGVyZTogJ+y9lOumrOyVhOyXkeyKpO2NvO2KuCjso7wpJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yXheustCDrs7Tqs6Ag7ZSE66Gc7IS47IqkIOyekOuPme2ZlCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+q4sOyhtCBQUFQg6riw67CYIOyXheustCDrs7Tqs6Ag67CPIOyImOyekeyXhSDst6jtlakg7ZSE66Gc7IS47Iqk66W8IE5vdGlvbiDsnpDrj5ntmZTroZwg7KCE7ZmYICjrjIDsg4Eg7JW9IDI166qFKScgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7YyA7JuQIFBQVOulvCDqsJzrs4Qg7Je07Ja0IOuzteyCrMK37KCV66as7ZWY642YIOq0gOumrOyekCDst6jtlakg7J6R7JeF7J2EIOygnOqxsO2VmOqzoCwgTm90aW9uIOyekOuPmSDst6jtlakgKyDsvZTrqZjtirgg67Cp7Iud7Jy866GcIOqwnOyEoCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAnQ2xhdWRlIEFQSeulvCDtmZzsmqntlZjsl6wg67O06rOgIOy0iOyViCDrsI8g7Leo7ZWpIOy0iOyViCDsnpDrj5kg7IOd7ISxIOq4sOuKpSDqtaztmIQnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+uPhOuplOyduCDsp4Dsi50g7LaV7KCBIOyytOqzhCDqtazstpUnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfstpXsoIHrkJwg7JeF66y0IOuNsOydtO2EsOulvCDquLDrsJjsnLzroZwgQ2xhdWRlIEFQSeulvCDtmZzsmqntlZwg64+E66mU7J24IOyngOyLnSDstIjslYgg7J6Q64+ZIOyDneyEsSDssrTqs4Qg6rWs7LaVJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfshLHqs7wnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnQk9MRCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6rSA66as7J6QIOyImOyekeyXhSDst6jtlakg7JeF66y0IOygnOqxsCDigJQgTm90aW9uIOyekOuPmSDst6jtlansnLzroZwg7KCE7ZmYJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICdDbGF1ZGUgQVBJIOyXsOuPmeycvOuhnCDrs7Tqs6DCt+y3qO2VqcK37KeA7IudIOy0iOyViCDsnpHshLEg7J6Q64+Z7ZmUJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICftmITsnqwgMeqwnCDtjIAg64yA7IOBIOyLnOuylCDsmrTsmIEg7KSRJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfroa/rjbDshpDtlbTrs7Ttl5gg6rOg7KeA7KCV67O0IOyekOuPmeyeheugpScsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjYtMDEnLFxyXG4gICAgICBlbmRlZEF0OiAnMjAyNi0wMicsXHJcbiAgICAgIHdoZXJlOiAn66Gv642w7IaQ7ZW067O07ZeYJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+qzoOyngOygleuztCDsnpDrj5nsnoXroKUg6riw64qlIOqwnOuwnCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yniOuzkeuzhCDqs7XthrXsp4jrrLjCt+y2lOqwgOyniOusuOycvOuhnCDqtazshLHrkJwg6rOg7KeA7KCV67O066W8IOyImOq4sCDsnoXroKXsl5DshJwg7IKs6rOg7J2066ClIOuNsOydtO2EsCDquLDrsJgg7J6Q64+Z7J6F66Cl7Jy866GcIOyghO2ZmO2VmOuKlCDquLDriqUg6rCc67CcJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICftmITsl4Xqs7wg7KeB7KCRIOy7pOuupOuLiOy8gOydtOyFmO2VmOupsCDsmpTqtazsgqztla0g7KCV66asIOuwjyDquLDriqUg67CY7JiBJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfqsJzrsJzrtoDthLAg7YWM7Iqk7Yq4LCDsmrTsmIEg67CY7JiB6rmM7KeAIOuLqOuPhSDsiJjtloknIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+qzte2GtSDsp4jrrLgg7J2R64u17JeQIOuUsOuluCDstpTqsIAg7KeI66y4IOygnOyWtCDrsI8g7Jyg7Zqo7ISxIOqygOymnSDroZzsp4Eg6rCc67CcJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6rO17Ya1IOyniOusuCDsnZHri7Xsl5Ag65Sw6528IOy2lOqwgCDsp4jrrLjsnYQg64+Z7KCB7Jy866GcIOygnOyWtCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7Jyg7Zqo7ISxIOqygOymneydhCDthrXtlbQg7JWM66ee7J2AIOuLteuzgOunjCDsnoXroKXrkJjrj4TroZ0g7LKY66asJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfshLHqs7wnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnQk9MRCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7J6Q64+Z7J6F66ClIOuPhOyeheycvOuhnCDtmITsl4Ug6rG064u5IOyeheugpSDsi5zqsIQgNTAlIOydtOyDgSDri6jstpUnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+q4sOyhtCDsnpjrqrvrkJwg7J6F66Cl7Jy866GcIOyduO2VnCDsi6zsgqwg67CY66CkIOy8gOydtOyKpOulvCDsnKDtmqjshLEg6rKA7KadIOuhnOyngeycvOuhnCDssKjri6gnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0RC7IOd66qFIOyniOuzkeyLrOyCrCDquLDriqUg6rCc7ISgJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNS0wOScsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI1LTEyJyxcclxuICAgICAgd2hlcmU6ICdEQuyDneuqhScsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsp4jrs5Hsi6zsgqwg6riw64qlIOuMgOydkSDqsJzrsJwnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfstpTqsIAg7IOB7ZKIIOy2nOyLnOyXkCDrlLDrpbgg7KeI67OR7Ius7IKsIOq4sOuKpSDrjIDsnZEg6rCc67CcJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfrjbDsnbTthLAg7Kad6rCA66GcIOu5hOuMgO2VtOynhCDtirnsoJUg7YWM7J2067iUIOu2hOumrCDsspjrpqwnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yDge2SiCDsvZTrk5zrpbwg7Zmc7Jqp7ZWcIExJU1Qg7YyM7Yuw7IWYIO2FjOydtOu4lCDshKTqs4Qg67CPIOyggeyaqScgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6riw7KG0IOyGjOyKpCDrsI8g7L+866asIOyImOyglSDstZzshoztmZQnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+uMgOyaqeufiSDrjbDsnbTthLAg7KCB7J6sIOuwjyDrjbDsnbTthLAg7KCV7ZWp7ISxIOqygOymnSDsiJjtloknIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yEseqzvCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdCT0xEJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfthYzsnbTruJQg6rWs7KGwIOqwnOyEoOycvOuhnCDsnKDsp4Drs7TsiJjshLEg67CPIOyhsO2ajCDshLHriqUg7Zal7IOBJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICftlqXtm4Qg7IOB7ZKIIOy2lOqwgCDsi5wg7ZmV7J6lIOqwgOuKpe2VnCBEQiDqtazsobAg7ZmV67O0JyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdLQiBMaWZlIOyniOuzkeyLrOyCrCDquLDriqUg6rCc7ISgJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNS0wNycsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI1LTA4JyxcclxuICAgICAgd2hlcmU6ICdLQiBMaWZlJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yniOuzkeyLrOyCrCDquLDriqUg6rCc67CcJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6rG06rCVIOyDge2SiCDstpzsi5wg64yA7J2RIOyniOuzkeyLrOyCrCDquLDriqUg6rCc67CcJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICc164WEIC8gMTDrhYQg7Iuc64KY66as7JikIO2MkCDrtoTrpqztlZjsl6wg7Ius7IKsIOq1rOyhsCDqsJzshKAnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+qwnOuwnCwg7YWM7Iqk7Yq4LCDsmrTsmIEg67CY7JiBIOyghCDqs7zsoJUg64uo64+FIOyImO2WiScgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7ISx6rO8JyxcclxuICAgICAgICAgIHdlaWdodDogJ0JPTEQnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yLpOygnCDqsJzrsJwg6riw6rCEIDHso7wsIO2FjOyKpO2KuCDtj6ztlaggMuyjvCDsnbTrgrQg6riw64qlIOq1rO2YhCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7LWc7LSIIOqzhO2ajeuQnCDsg4Htkogg7Lac7IucIOydvOygleyXkCDrp57strAg7Jq07JiBIOuwmOyYgSDsmYTro4wnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+2VmOuCmOyDneuqhSDsoJwz67O07ZeYIOyLnOyKpO2FnCDqtazstpUgKOyyreyVveyLrOyCrCDsnpDrj5ntmZQpJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNC0wOCcsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI1LTA2JyxcclxuICAgICAgd2hlcmU6ICftlZjrgpjsg53rqoUnLFxyXG4gICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7L2Y7YWQ7LigIOuwsO2PrCDquLDriqUnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfqsJzrsJzqs4Qg4oaSIO2FjOyKpO2KuOqzhCDihpIg7Jq07JiB6rOEIOuNsOydtO2EsCDrsLDtj6wg6riw64qlIOqwnOyEoCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7ISg7YOd7KCBIOuwsO2PrOqwgCDqsIDriqXtlZjrj4TroZ0g67Cw7Y+sIO2UhOuhnOyEuOyKpCDqsJzshKAnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+uwsO2PrCDtjIzsnbwg64uk7Jq066Gc65OcIC8g7JeF66Gc65OcIOq4sOuKpSDqtaztmIQnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+qwhOuLqO2VnCDqsrDsnqwg67CPIOyYiOyVvSDrsLDtj6wg6riw64qlIOqwnOuwnCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn64yA7Jqp65+JIOuNsOydtO2EsCDsspjrpqwg7ISx64qlIOqwnOyEoCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn64uo6rG0IFNFTEVDVCDrsKnsi50g4oaSIDEsMDAw6rG0IOuLqOychCDsnbzqtIQg7LKY66asIOuwqeyLneycvOuhnCDqsJzshKAnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+2ZlOuptOyXkOyEnCDqsIEg67Cw7Y+sIOuMgOyDgSDsu6jthZDsuKDrpbwg67aI65+s7Jik64qUIOu2gOu2hOydhCDruYTrj5nquLDroZwg7LKY66as7ZWY7JesIOy0iOq4sCDroZzrlKkg7IaN64+EIOqwnOyEoCcgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn6rKM7Iuc7YyQIC8g7Ya16rOEIO2ZlOuptCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yalOq1rOyCrO2VreyXkCDrp57strAg6riw7KG0IOqyjOyLnO2MkCDtmZTrqbQg7Luk7Iqk7YSw66eI7J207KeVJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsi6zsgqwg6rKw6rO866W8IOqwgSDtirnshLHsl5Ag66ee6rKMIOy0nSA26rCcIO2ZlOuptOycvOuhnCDqtazshLHtlZjsl6wg7KCc6rO1JyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfshLHqs7wnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnQk9MRCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAnREIg67aA7ZWYIOqwkOyGjCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn642w7J207YSwIOyhsO2ajCDrsI8g7YyM7J28IOyDneyEsSDsho3rj4Qg6rCc7ISgJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsmrTsmIEg7ZmY6rK97JeQ7IScIOyViOygleyggeyduCDrjIDsmqnrn4kg67Cw7Y+sIOyytOqzhCDqtazstpUnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ0RCQSDsmpTssq0g7JeG7J20LCDsmrTsmIEg7KSRIOuzgOqyvSDsgqztla0g67CY7JiBIOqwgOuKpScgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnVGhlIEtFIO2UhOuhnO2MjOydvCDrsI8g7J6l67mEIOq0gOumrCDsi5zsiqTthZwnLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDI0LTAzJyxcclxuICAgICAgZW5kZWRBdDogJzIwMjQtMDcnLFxyXG4gICAgICB3aGVyZTogJ+y9lOumrOyVhOyXkeyKpO2NvO2KuCjso7wpJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yCrOuCtCDsnbjroKXCt+yepeu5hCDqtIDrpqwg7Iuc7Iqk7YWcIOq1rOy2lScsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+ydtOugpeyEnCDsiJjsoJUg7Iq57J24IO2OmOydtOyngCDqsJzrsJwnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+q0gOumrOyekCDrqZTribQg6rCc67CcIOuwjyDsgqzsmqnsnpAg6raM7ZWcIOq0gOumrCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn66Gc6re4IOq0gOumrCAoQU9QLCBMb2diYWNrIO2ZnOyaqSknIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yLpOyLnOqwhCDshJzrsoQg7J6Q7JuQIOuqqOuLiO2EsOungScgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAnRG9ja2VyIENvbXBvc2Ug6riw67CYIOqwnOuwnC/smrTsmIEg7ZmY6rK9IOq1rOy2lScgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAnSmVua2lucyDsnpDrj5kg67mM65OcwrfrsLDtj6wg7ZmY6rK9IOq1rOyEsScgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=